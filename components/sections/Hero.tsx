import { AppStoreButton } from "@/components/AppStoreButton";
import { Photo } from "@/components/Photo";
import { Phone } from "@/components/Screen";
import { PHOTOS } from "@/lib/site";

// Layout family: asymmetric split hero (copy left, layered photo + device right).
// Entrance is CSS-only and transform-only so the hero paints before JavaScript loads (LCP).
export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-4 pb-20 pt-10 sm:px-6 md:pt-16 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-14">
      <div className="lg:col-span-6 lg:pt-10">
        <div className="hero-enter">
          <h1 className="max-w-[13ch] text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] md:text-6xl">
            Note ta journée en un tap.
          </h1>
        </div>
        <div className="hero-enter [--d:80ms]">
          <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-muted md:text-xl">
            Symio, l’app gratuite qui suit tes symptômes, ton humeur et tes traitements, puis prépare un résumé pour ton médecin.
          </p>
        </div>
        <div className="hero-enter [--d:160ms]">
          <AppStoreButton className="mt-9" />
        </div>
      </div>

      <div className="relative lg:col-span-6">
        <div className="hero-enter [--d:60ms] ml-auto w-[82%] sm:w-[72%] lg:w-[80%]">
          <Photo
            src={PHOTOS.heroMatin}
            alt="Une femme enveloppée dans un plaid lavande boit un thé près de la fenêtre, le matin."
            sizes="(min-width: 1024px) 40vw, 80vw"
            priority
            className="aspect-[3/4] rounded-[var(--radius-card)]"
          />
        </div>
        <div className="hero-enter [--d:200ms] [--y:40px] absolute -bottom-8 left-0 w-[44%] sm:w-[36%] lg:left-[-4%] lg:w-[42%]">
          <Phone
            name="02-check-in"
            alt="Écran de check-in de Symio : Comment tu te sens aujourd’hui ? avec cinq visages, de Très mal à Très bien."
            sizes="(min-width: 1024px) 18vw, 40vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
