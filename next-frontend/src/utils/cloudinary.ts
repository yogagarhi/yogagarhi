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

    const cleanPath = path.replace(/^\/+/, '');
    const filename = cleanPath.split('/').pop() || cleanPath;
    const resource = cloudinaryMap[cleanPath] || cloudinaryMap[filename];

    if (!resource) {
        if (process.env.NODE_ENV === 'development') {
            // console.warn(`[Cloudinary] Image not found in map: ${path}`);
        }
        // Ensure path starts with / for next/image if it's not a URL
        return path.startsWith('/') ? path : `/${path}`;
    }

    const transformations: string[] = [];
    transformations.push(options.format ? `f_${options.format}` : 'f_auto');
    transformations.push(options.quality ? `q_${options.quality}` : 'q_auto');

    if (options.width) transformations.push(`w_${options.width}`);
    if (options.height) transformations.push(`h_${options.height}`);

    const transformationString = transformations.join(',');
    const extension = resource.format ? `.${resource.format}` : '';

    return `${BASE_URL}/${transformationString}/${resource.public_id}${extension}`;
}

/**
 * Returns a StaticImageData-like object for Next.js Image component
 */
export function getCloudinaryImage(filename: string) {
    // If passed a path or url, clean it
    const cleanPath = filename.replace(/^\/+/, '');
    const cleanName = cleanPath.split('/').pop() || cleanPath;
    const resource = cloudinaryMap[cleanPath] || cloudinaryMap[cleanName];

    if (!resource) {
        if (process.env.NODE_ENV === 'development') {
            // console.warn(`[Cloudinary] Image not found for object: ${filename}`);
        }
        return {
            src: filename.startsWith('/') ? filename : `/${filename}`,
            width: 800, // Fallback
            height: 600
        };
    }

    const url = getCloudinaryUrl(cleanPath);

    return {
        src: url,
        width: resource.width,
        height: resource.height,
        // Optional: blurDataURL if we want placeholder
        blurDataURL: getCloudinaryUrl(cleanPath, { width: 10, quality: 10 })
    };
}
