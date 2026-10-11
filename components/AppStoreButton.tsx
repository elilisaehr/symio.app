import { APP_STORE_BADGE, APP_STORE_URL, CTA_LABEL } from "@/lib/site";

type Props = { size?: "md" | "sm"; className?: string };

// Official Apple badge, used as-is (no recoloring, no reshaping), per Apple's marketing guidelines.
// Apple's minimum on-screen height is 40px; the clear space around it comes from the surrounding layout.
export function AppStoreButton({ size = "md", className = "" }: Props) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-block shrink-0 rounded-[10px] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- SVG badge, no optimization needed */}
      <img
        src={APP_STORE_BADGE}
        alt={CTA_LABEL}
        width={120}
        height={40}
        className={`block w-auto ${size === "md" ? "h-[54px]" : "h-10"}`}
      />
    </a>
  );
}
