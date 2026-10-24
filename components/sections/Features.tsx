import { Pill } from "@phosphor-icons/react/dist/ssr";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Phone } from "@/components/Screen";
import { PHOTOS } from "@/lib/site";

// Layout family: bento grid, 4 items in 4 cells (tall + two stacked + full-width base).
export function Features() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 md:pb-40">
      <Reveal className="max-w-2xl">
        <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
          Tout ce qui compte, au même endroit.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:grid-rows-[auto_auto_auto]">
        <Reveal className="lg:col-span-7 lg:row-span-2">
          <article className="relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[var(--radius-card)] bg-accent-soft p-8 md:p-10">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] md:text-[28px]">Tes semaines, d’un coup d’œil.</h3>
            <p className="mt-3 max-w-[38ch] text-[17px] leading-relaxed text-muted">
              Chaque symptôme sur sa courbe, ton humeur jour après jour, sur une semaine ou un mois.
            </p>
            <div className="relative mt-10 flex flex-1 justify-center">
              <Phone
                name="03-rapports"
                alt="Écran Rapports de Symio : courbes de fatigue, douleur et nausées sur une semaine."
                sizes="(min-width: 1024px) 26vw, 70vw"
                className="absolute top-0 w-[68%] max-w-[330px]"
              />
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.06} className="lg:col-span-5">
          <article className="flex h-full flex-col justify-between gap-10 rounded-[var(--radius-card)] bg-surface p-8 shadow-soft md:p-10">
            <span className="grid size-14 place-items-center rounded-full bg-accent-soft text-accent">
              <Pill size={28} weight="duotone" aria-hidden />
            </span>
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Tes traitements, suivis de près.</h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-muted">
                Dose, fréquence, date de début. Tout est noté pour comparer tes symptômes avant et après.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-5">
          <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-soft">
            <Photo
              src={PHOTOS.soir}
              alt="Deux mains tiennent une tasse près d’une fenêtre, à la tombée du jour."
              sizes="(min-width: 1024px) 34vw, 92vw"
              className="aspect-[16/9]"
            />
            <div className="p-8 md:px-10">
              <h3 className="text-2xl font-semibold tracking-[-0.02em]">Un rappel doux, chaque soir.</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">À l’heure que tu choisis. Deux minutes suffisent.</p>
            </div>
          </article>
        </Reveal>

        <Reveal className="lg:col-span-12">
          <article className="grid grid-cols-1 items-center gap-12 rounded-[var(--radius-card)] bg-accent px-8 py-12 text-accent-ink md:grid-cols-12 md:px-12 md:py-16">
            <div className="md:col-span-5">
              <h3 className="text-3xl font-semibold tracking-[-0.025em] md:text-4xl">Clair ou sombre, comme ton téléphone.</h3>
              <p className="mt-4 max-w-[36ch] text-[17px] leading-relaxed opacity-85">
                Symio suit le réglage de ton téléphone, pour rester doux à regarder, même tard le soir.
              </p>
            </div>
            {/* Both devices shown whole: the second sits lower, and the panel padding leaves room for it. */}
            <div className="mx-auto grid w-full max-w-[460px] grid-cols-2 items-start gap-4 sm:gap-6 md:col-span-7 md:max-w-[480px]">
              <Phone force="light" name="01-accueil" alt="Accueil de Symio en mode clair." sizes="(min-width: 768px) 220px, 42vw" />
              <Phone force="dark" name="01-accueil" alt="Accueil de Symio en mode sombre." sizes="(min-width: 768px) 220px, 42vw" className="mt-10 md:mt-14" />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
