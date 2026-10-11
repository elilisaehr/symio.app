import { Reveal } from "@/components/Reveal";
import { Phone } from "@/components/Screen";

// Layout family: stacked header over a wide panel with two layered devices (no text/image split).
export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 md:pb-40">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
          Ton traitement, avant et après.
        </h2>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
          Symio compare tes symptômes des 4 semaines avant, de la première semaine et des 7 derniers jours. Sans calcul de ta part.
        </p>
      </Reveal>
      <Reveal delay={0.08} className="mt-14">
        <div className="relative h-[460px] overflow-hidden rounded-[var(--radius-card)] bg-surface-2 sm:h-[560px] md:h-[620px]">
          <Phone
            name="04-traitements"
            alt="Écran Traitements de Symio : Vedolizumab au jour 30, avec la liste des traitements en cours."
            sizes="(min-width: 768px) 22vw, 46vw"
            className="absolute left-[6%] top-24 w-[44%] max-w-[300px] -rotate-6 opacity-95 sm:left-[14%] md:left-[22%] md:top-28"
          />
          <Phone
            name="05-traitement-detail"
            alt="Écran Avant et après de Symio : fatigue, douleur et nausées comparées sur trois périodes."
            sizes="(min-width: 768px) 24vw, 50vw"
            className="absolute right-[6%] top-10 w-[48%] max-w-[330px] sm:right-[14%] md:right-[24%] md:top-12"
          />
        </div>
      </Reveal>
    </section>
  );
}
