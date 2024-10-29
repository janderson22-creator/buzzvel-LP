import NextImage from 'next/image';

type Props = {
  src: string;
  className: string;
  alt?: string;
  priority?: true;
};

export const Image = ({ src, className, alt = '', priority }: Props) => (
  <NextImage
    src={src}
    className={className}
    alt={alt}
    width={50}
    height={50}
    sizes="100vw"
    quality={80}
    priority={priority}
    loading={priority ? 'eager' : 'lazy'}
  />
);
