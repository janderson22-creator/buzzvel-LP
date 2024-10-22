import NextImage from 'next/image';

type Props = {
  src: string;
  className: string;
  alt: string;
};

export const Image = ({ src, className, alt }: Props) => (
  <NextImage
    src={src}
    className={className}
    alt={alt}
    width={0}
    height={0}
    sizes="100vw"
    quality={100}
    priority
  />
);
