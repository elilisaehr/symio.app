import { DeviceMobile, PaperPlaneTilt, ScanSmiley, UserCircleDashed } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/Reveal";

const FACTS = [
  { Icon: UserCircleDashed, title: "Sans compte", body: "Tu ouvres l’app et tu commences." },
  { Icon: DeviceMobile, title: "Sur ton téléphone", body: "Tes données sont enregistrées seulement sur ton téléphone." },
  { Icon: ScanSmiley, title: "Face ID ou empreinte", body: "Verrouille l’app si tu le souhaites." },
  { Icon: PaperPlaneTilt, title: "Ton choix", body: "Tu décides à qui envoyer ton résumé." },
];

// Layout family: statement + 2x2 icon grid (typographic, no cards).
export function Privacy() {
  return (
    <section id="confidentialite" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-28 sm:px-6 md:pb-40">
      <div className="grid grid-cols-1 gap-14 border-t border-line pt-20 md:pt-28 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-6">
          <h2 className="max-w-[14ch] text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
            Tes données restent sur ton téléphone.
          </h2>
          <a
            href="/confidentialite/"
            className="mt-8 inline-block text-[17px] text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Lire la politique de confidentialité
          </a>
        </Reveal>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:col-span-6">
          {FACTS.map(({ Icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.06}>
                <Icon size={32} weight="duotone" className="text-accent" aria-hidden />
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.015em]">{title}</h3>
                <p className="mt-2 max-w-[30ch] text-[17px] leading-relaxed text-muted">{body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
