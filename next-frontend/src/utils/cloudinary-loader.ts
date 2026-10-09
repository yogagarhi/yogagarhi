const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dngsqdwbb';

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

/**
 * Custom Cloudinary Image Loader for Next.js
 * Generates URLs in format: https://res.cloudinary.com/dngsqdwbb/image/upload/f_auto,q_auto,c_limit,w_{width}/<public_id>
 */
export default function cloudinaryLoader({ src, width }: ImageLoaderProps): string {
  if (!src) return '';

  // 1. External non-Cloudinary URLs returned as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    if (!src.includes('res.cloudinary.com')) {
      return src;
    }

    // 2. Cloudinary URL: strip existing transformations/version, preserve folders & filename
    const uploadMarker = '/image/upload/';
    const uploadIndex = src.indexOf(uploadMarker);
    if (uploadIndex !== -1) {
      const pathAfterUpload = src.substring(uploadIndex + uploadMarker.length);
      const segments = pathAfterUpload.split('/');

      // Helper to identify transformation segments (e.g. f_auto,q_auto, w_640, c_limit) or version numbers (e.g. v12345)
      const isTransformationOrVersion = (seg: string): boolean => {
        if (/^v\d+$/.test(seg)) return true;
        const parts = seg.split(',');
        return parts.length > 0 && parts.every(part => /^[a-z]{1,3}_/i.test(part));
      };

      while (segments.length > 0 && isTransformationOrVersion(segments[0])) {
        segments.shift();
      }

      const cleanPublicId = segments.join('/');
      return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_limit,w_${width}/${cleanPublicId}`;
    }
  }

  // 3. Direct Cloudinary path (e.g. yogagarhi/public/...)
  const cleanPath = src.replace(/^\/+/, '');
  if (cleanPath.startsWith('yogagarhi/')) {
    return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,c_limit,w_${width}/${cleanPath}`;
  }

  // 4. Local fallback: unmapped files served from /public
  return src.startsWith('/') ? src : `/${src}`;
}
