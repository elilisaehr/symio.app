type Props = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

// Generated photography. The tinted wrapper doubles as the loading state.
export function Photo({ src, alt, className = "", priority }: Props) {
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </div>
  );
}
