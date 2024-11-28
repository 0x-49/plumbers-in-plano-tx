import { ImageProps } from "next/image";

export interface OptimizedImageProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  sizes?: string;
}

export function getImageProps(src: string, alt: string, sizes?: string): OptimizedImageProps {
  return {
    src,
    alt,
    width: 0,
    height: 0,
    sizes: sizes || '100vw',
    style: { width: '100%', height: 'auto' },
    priority: src.includes('hero') || src.includes('banner'),
    loading: src.includes('hero') || src.includes('banner') ? 'eager' : 'lazy',
  };
}

export const imageKitLoader = ({ src, width, quality }: {
  src: string;
  width: number;
  quality?: number;
}) => {
  const params = [`w-${width}`];
  if (quality) {
    params.push(`q-${quality}`);
  }
  return `https://ik.imagekit.io/your-account/${src}?tr=${params.join(',')}`;
};