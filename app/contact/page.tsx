import type { Metadata } from "next";
import { ArrowUpRight, ChatCircleText, Lightbulb, Bug } from "@phosphor-icons/react/dist/ssr";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur Symio ? Écris-nous à support@symio.ch.",
  alternates: { canonical: "/contact/" },
};

// No form and no server: every option opens the visitor's mail app with a prefilled e-mail,
// like « Nous écrire » in the app. Nothing is sent by the site.
const mailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const TOPICS = [
  { Icon: ChatCircleText, title: "Poser une question", body: "Sur l’app, son fonctionnement ou tes données.", subject: "Symio - une question" },
  { Icon: Bug, title: "Signaler un problème", body: "Dis-nous ce qui s’est passé et sur quel écran.", subject: "Symio - un problème" },
  { Icon: Lightbulb, title: "Proposer une idée", body: "Un symptôme qui manque, une amélioration.", subject: "Symio - une idée" },
];

export default function Contact() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 pb-28 pt-14 sm:px-6 md:pt-20">
        <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">Écris-nous.</h1>
        <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-muted">
          Une question, un souci ou une idée ? Nous lisons chaque message et répondons dès que possible.
        </p>

        <a
          href={mailto("Symio")}
          className="mt-10 inline-flex h-14 items-center gap-2.5 whitespace-nowrap rounded-full bg-accent px-7 text-[17px] font-medium text-accent-ink transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {CONTACT_EMAIL}
          <ArrowUpRight size={20} weight="bold" aria-hidden />
        </a>

        <ul className="mt-14 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-soft">
          {TOPICS.map(({ Icon, title, body, subject }) => (
            <li key={title}>
              <a
                href={mailto(subject)}
                className="group flex items-center gap-5 px-6 py-5 transition-colors hover:bg-surface-2 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent md:px-8 md:py-6"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon size={24} weight="duotone" aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold tracking-[-0.01em] text-ink">{title}</span>
                  <span className="mt-0.5 block text-[15px] leading-relaxed text-muted">{body}</span>
                </span>
                <ArrowUpRight size={20} aria-hidden className="shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-14 space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            Évite de mettre dans ton message des détails de santé que tu ne veux pas partager. Nous utilisons ton adresse et ton
            message uniquement pour te répondre (voir la <a href="/confidentialite/#ecrire" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">politique de confidentialité</a>).
          </p>
          <p>
            <strong className="font-semibold text-ink">Symio ne remplace pas un avis médical.</strong> En cas d’urgence, appelle le
            144 (Suisse) ou le numéro d’urgence de ton pays.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
