import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";

// Shared layout for the legal pages (privacy policy, legal notice).

type TocItem = { id: string; label: string };

export function LegalShell({
  title,
  updated,
  toc,
  children,
}: {
  title: string;
  updated?: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-4 pb-28 pt-14 sm:px-6 md:pt-20">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">{title}</h1>
          {updated && <p className="mt-5 text-[17px] text-muted">Dernière mise à jour : {updated}</p>}
        </header>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <nav aria-label="Sommaire" className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pr-4">
              <p className="text-[15px] font-semibold text-ink">Sommaire</p>
              <ol className="mt-4 space-y-2.5 text-[14px] leading-snug text-muted">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="transition-colors hover:text-ink">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-[68ch] space-y-12 text-[17px] leading-relaxed text-muted lg:col-span-8 xl:col-start-5 [&_strong]:font-semibold [&_strong]:text-ink">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-10">
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[28px]">{title}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </section>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-2.5 pl-5 marker:text-accent">{children}</ul>;
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

// Shows the value, or a visible marker while the publisher's details are not filled in (lib/site.ts).
export function Field({ value }: { value: string }) {
  if (value) return <>{value}</>;
  return <span className="rounded-md bg-accent-soft px-1.5 py-0.5 text-[15px] font-medium text-accent">À compléter</span>;
}
