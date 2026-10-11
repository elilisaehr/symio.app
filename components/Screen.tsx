import { getImageProps } from "next/image";
import type { ScreenName } from "@/lib/site";

type Props = {
  name: ScreenName;
  alt: string;
  sizes: string;
  priority?: boolean;
  // Show the opposite theme’s screenshot (used to show off dark mode on a light page and vice versa).
  invert?: boolean;
  // Always show one theme, whatever the system setting.
  force?: "light" | "dark";
  className?: string;
};

// Real app screenshot that follows the system theme, like the app itself.
export function Screen({ name, alt, sizes, priority, invert, force, className = "" }: Props) {
  const common = { alt, width: 1179, height: 2556, sizes, priority };
  if (force) {
    const forced = getImageProps({ ...common, src: `/app-screens/${force}/${name}.png` }).props;
    return <img {...forced} alt={alt} className={`block h-auto w-full ${className}`} />;
  }
  const light = getImageProps({ ...common, src: `/app-screens/light/${name}.png` }).props;
  const dark = getImageProps({ ...common, src: `/app-screens/dark/${name}.png` }).props;
  const [primary, alternate] = invert ? [dark, light] : [light, dark];
  return (
    <picture className="block">
      <source media="(prefers-color-scheme: dark)" srcSet={alternate.srcSet} sizes={sizes} />
      <img {...primary} alt={alt} className={`block h-auto w-full ${className}`} />
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
      <div className="overflow-hidden rounded-[41px] bg-surface">
        <Screen {...screen} />
      </div>
    </div>
  );
}
