import { Plus } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const QUESTIONS = [
  { q: "Symio est-elle vraiment gratuite ?", a: "Oui. Symio est gratuite sur l’App Store." },
  { q: "Faut-il créer un compte ?", a: "Non. Symio fonctionne sans compte, et tes données sont enregistrées seulement sur ton iPhone." },
  { q: "Quelles maladies puis-je suivre ?", a: "Celle que tu veux. Tu choisis ta maladie et tes symptômes dans ton profil, ou tu suis simplement tes symptômes." },
  { q: "Symio remplace-t-elle mon médecin ?", a: "Non. Symio ne remplace pas un avis médical. Elle t’aide à garder une trace et à préparer tes rendez-vous." },
  { q: "Sur quels appareils ?", a: "Symio est disponible sur iPhone." },
];

// Layout family: stacked accordion (native details, keyboard accessible).
export function Faq() {
  return (
    <section id="questions" className="mx-auto max-w-3xl scroll-mt-24 px-4 pb-28 sm:px-6 md:pb-40">
      <Reveal>
        <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">Tes questions.</h2>
      </Reveal>
      <Reveal delay={0.08} className="mt-12">
        <div className="divide-y divide-line">
          {QUESTIONS.map(({ q, a }) => (
            <details key={q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-[var(--radius-card)] text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-xl">
                {q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-surface-2 transition-transform duration-300 group-open:rotate-45">
                  <Plus size={18} weight="bold" aria-hidden />
                </span>
              </summary>
              <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-muted">{a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
