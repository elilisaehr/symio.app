import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { PHOTOS } from "@/lib/site";

const STORIES = [
  { photo: PHOTOS.parc, condition: "Covid long", line: "Voir si la fatigue recule, semaine après semaine.", alt: "Un homme se repose sur un banc dans un parc en automne." },
  { photo: PHOTOS.cuisine, condition: "Lupus", line: "Suivre les poussées et l’effet du traitement.", alt: "Une jeune femme prend son traitement à la table de la cuisine, le matin." },
  { photo: PHOTOS.etirement, condition: "Polyarthrite", line: "Garder une trace de la douleur au réveil.", alt: "Une femme aux cheveux argentés fait des étirements doux sur un tapis." },
  { photo: PHOTOS.repos, condition: "Maladie de Crohn", line: "Noter les douleurs abdominales en quelques secondes.", alt: "Un homme lit allongé, une bouillotte sur le ventre." },
];

// Layout family: horizontal scroll-snap gallery.
export function Stories() {
  return (
    <section className="pb-28 md:pb-40">
      <Reveal className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="max-w-[18ch] text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
          Pour les bons jours, et pour les autres.
        </h2>
      </Reveal>
      <ul
        aria-label="Exemples d’usage"
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 sm:scroll-px-6 sm:px-6 xl:scroll-px-[calc((100vw-80rem)/2+1.5rem)] xl:px-[calc((100vw-80rem)/2+1.5rem)]"
      >
        {STORIES.map((s, i) => (
          <li key={s.condition} className="w-[78vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30vw] xl:w-[380px]">
            <Reveal delay={i * 0.06}>
              <Photo src={s.photo} alt={s.alt} sizes="(min-width: 1280px) 380px, (min-width: 1024px) 30vw, 78vw" className="aspect-[3/4] rounded-[var(--radius-card)]" />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.015em]">{s.condition}</h3>
              <p className="mt-1.5 text-[17px] leading-relaxed text-muted">{s.line}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
