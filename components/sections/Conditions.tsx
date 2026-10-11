const CONDITIONS = [
  "Lupus",
  "Covid long",
  "Maladie de Crohn",
  "Endométriose",
  "Sclérose en plaques",
  "Polyarthrite rhumatoïde",
  "Fibromyalgie",
  "Rectocolite hémorragique",
  "Spondylarthrite",
  "Migraine chronique",
];

// Layout family: marquee band (the only marquee on the page). It shows breadth without a long list.
export function Conditions() {
  const row = [...CONDITIONS, ...CONDITIONS];
  return (
    <section aria-labelledby="conditions-title" className="border-y border-line py-12 md:py-14">
      <h2 id="conditions-title" className="mx-auto max-w-7xl px-4 text-center text-[17px] text-muted sm:px-6">
        Pensée pour vivre avec une maladie chronique, quelle qu’elle soit.
      </h2>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max gap-14 pr-14 text-2xl font-medium tracking-[-0.02em] text-ink/80 md:text-3xl">
          {row.map((c, i) => (
            <li key={`${c}-${i}`} aria-hidden={i >= CONDITIONS.length} className="whitespace-nowrap">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
