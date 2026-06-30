/**
 * Cloudinary Utility for Yogagarhi
 */
import { cloudinaryMap } from './cloudinary-map';

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dngsqdwbb';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;

interface CloudinaryImageOptions {
    width?: number;
    height?: number;
    quality?: number | string; // e.g. 'auto' or 80
    format?: string; // e.g. 'auto', 'webp'
}

/**
 * Transforms a local path to a Cloudinary URL.
 * 
 * @param path - The local path (e.g., "/hero-yoga-group.jpg" or "@/assets/about.jpg" or just "hero-yoga-group.jpg")
 * @param options - Transformation options (width, height, quality)
 * @returns Full Cloudinary URL
 */
export function getCloudinaryUrl(path: string, options: CloudinaryImageOptions = {}) {
    if (!path) return '';
    if (path.startsWith('http')) return path;

    const filename = path.split('/').pop() || '';
    const resource = cloudinaryMap[filename];

    if (!resource) {
        if (process.env.NODE_ENV === 'development') {
            // console.warn(`[Cloudinary] Image not found in map: ${filename}`);
        }
        // Ensure path starts with / for next/image if it's not a URL
        return path.startsWith('/') ? path : `/${path}`;
    }

    const transformations: string[] = ['f_auto', 'q_auto'];

    if (options.width) transformations.push(`w_${options.width}`);
    if (options.height) transformations.push(`h_${options.height}`);
    if (options.quality) transformations.push(`q_${options.quality}`);

    const transformationString = transformations.join(',');
    const extension = resource.format ? `.${resource.format}` : '';

    return `${BASE_URL}/${transformationString}/${resource.public_id}${extension}`;
}

/**
 * Returns a StaticImageData-like object for Next.js Image component
 */
export function getCloudinaryImage(filename: string) {
    // If passed a path or url, clean it
    const cleanName = filename.split('/').pop() || '';
    const resource = cloudinaryMap[cleanName];

    if (!resource) {
        if (process.env.NODE_ENV === 'development') {
            // console.warn(`[Cloudinary] Image not found for object: ${cleanName}`);
        }
        return {
            src: filename.startsWith('/') ? filename : `/${filename}`,
            width: 800, // Fallback
            height: 600
        };
    }

    // Reuse getCloudinaryUrl logic or construct manually
    // Since getCloudinaryUrl now handles objects, we can call it.
    const url = getCloudinaryUrl(cleanName);

    return {
        src: url,
        width: resource.width,
        height: resource.height,
        // Optional: blurDataURL if we want placeholder
        blurDataURL: getCloudinaryUrl(cleanName, { width: 10, quality: 10 })
    };
}
