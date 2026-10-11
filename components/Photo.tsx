import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
};

// Generated photography. The tinted wrapper doubles as the loading state.
export function Photo({ src, alt, sizes, className = "", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}
