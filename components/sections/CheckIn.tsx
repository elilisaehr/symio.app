import { MoodPicker } from "@/components/MoodPicker";
import { Reveal } from "@/components/Reveal";

// Layout family: centered interactive stage (a working mini check-in, no image split).
export function CheckIn() {
  return (
    <section id="fonctionnalites" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-28 sm:px-6 md:py-40">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] md:text-[3.25rem]">
          Comment tu te sens aujourd’hui ?
        </h2>
        <p className="mx-auto mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
          Les jours difficiles, un tap suffit. Le check-in complet attend les jours où tu as plus d’énergie.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl rounded-[var(--radius-card)] bg-surface px-5 py-12 shadow-soft md:px-12 md:py-16">
        <MoodPicker />
      </Reveal>
    </section>
  );
}
