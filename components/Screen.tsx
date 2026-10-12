import type { ScreenName } from "@/lib/site";

type Props = {
  name: ScreenName;
  alt: string;
  sizes?: string;
  priority?: boolean;
  // Always show one theme, whatever the system setting.
  force?: "light" | "dark";
  className?: string;
};

// Real app screenshot (pre-compressed WebP, 720px wide) that follows the system theme, like the app itself.
// Sources: design/app-screens/ (full-size PNGs).
export function Screen({ name, alt, priority, force, className = "" }: Props) {
  const src = (theme: "light" | "dark") => `/app-screens/${theme}/${name}.webp`;
  const img = (
    // eslint-disable-next-line @next/next/no-img-element -- static export, images are pre-compressed
    <img
      src={src(force ?? "light")}
      alt={alt}
      width={720}
      height={1561}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`block h-auto w-full ${className}`}
    />
  );
  if (force) return img;
  return (
    <picture className="block">
      <source media="(prefers-color-scheme: dark)" srcSet={src("dark")} />
      {img}
    </picture>
  );
}

type FrameProps = Omit<Props, "className"> & { className?: string };

// Device frame around a real screenshot. The bezel is plain CSS; the screen content is the real capture.
export function Phone({ className = "", ...screen }: FrameProps) {
  return (
    <div
      className={`shadow-soft rounded-[var(--radius-device)] bg-[#0e0e16] p-[7px] ring-1 ring-black/10 dark:ring-white/10 ${className}`}
    >
      <div className="overflow-hidden rounded-[24px] bg-surface">
        <Screen {...screen} />
      </div>
    </div>
  );
}
