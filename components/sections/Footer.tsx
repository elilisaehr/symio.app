import { CONTACT_EMAIL } from "@/lib/site";

const LINKS = [
  { href: `mailto:${CONTACT_EMAIL}`, label: CONTACT_EMAIL },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Politique de confidentialité" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-12 pt-6 text-[15px] text-muted sm:px-6">
      <div className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <a href="/" className="text-xl font-semibold tracking-[-0.04em] text-ink">
            Symio
          </a>
          <p>Symio ne remplace pas un avis médical. En cas d’urgence, appelle le 144.</p>
        </div>
        <nav aria-label="Liens légaux et contact">
          <ul className="flex flex-col gap-3 md:items-end">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li>© 2026 Symio</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
