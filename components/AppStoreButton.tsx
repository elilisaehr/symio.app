import { AppleLogo } from "@phosphor-icons/react/dist/ssr";
import { APP_STORE_URL, CTA_LABEL } from "@/lib/site";

type Props = { size?: "md" | "sm"; className?: string };

export function AppStoreButton({ size = "md", className = "" }: Props) {
  const sizing = size === "md" ? "h-14 px-7 text-[17px] gap-2.5" : "h-11 px-5 text-[15px] gap-2";
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full bg-ink font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${sizing} ${className}`}
    >
      <AppleLogo weight="fill" size={size === "md" ? 22 : 18} aria-hidden />
      {CTA_LABEL}
    </a>
  );
}
