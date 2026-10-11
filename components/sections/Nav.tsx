import { AppStoreButton } from "@/components/AppStoreButton";

const LINKS = [
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#confidentialite", label: "Confidentialité" },
  { href: "#questions", label: "Questions" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-[var(--z-nav)] border-b border-line bg-bg/80 backdrop-blur-xl [--z-nav:40]">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6" aria-label="Navigation principale">
        <a href="#" className="text-[26px] font-semibold tracking-[-0.04em]">
          Symio
        </a>
        <ul className="hidden items-center gap-9 text-[15px] text-muted md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <AppStoreButton size="sm" className="hidden sm:inline-flex" />
      </nav>
    </header>
  );
}
