import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Phone } from "@/components/Screen";
import { PHOTOS } from "@/lib/site";

// Layout family: full-width media with an overlapping copy card and device.
export function Doctor() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-6 md:pb-40">
      <div className="relative">
        <Reveal>
          <Photo
            src={PHOTOS.consultation}
            alt="Une patiente tend une page de résumé à sa médecin pendant une consultation."
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="aspect-[4/3] rounded-[var(--radius-card)] md:aspect-[16/8]"
          />
        </Reveal>
        <Reveal
          delay={0.1}
          className="relative z-[1] -mt-16 mx-3 md:absolute md:bottom-10 md:left-10 md:mx-0 md:mt-0 md:w-[440px]"
        >
          <div className="rounded-[var(--radius-card)] bg-surface p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] md:text-[2.5rem]">
              Arrive en consultation avec un résumé clair.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-muted">
              Un PDF d’une page avec tes symptômes, ton humeur et tes traitements. Tu choisis à qui l’envoyer.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.18} y={40} className="absolute -top-10 right-6 hidden w-[210px] lg:block xl:right-14 xl:w-[240px]">
          <Phone
            name="06-resume-medecin"
            alt="Écran Résumé pour ton médecin : aperçu du PDF des symptômes de la semaine."
            sizes="240px"
          />
        </Reveal>
      </div>
    </section>
  );
}
