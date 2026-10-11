export function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-12 pt-6 text-[15px] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <span className="text-xl font-semibold tracking-[-0.04em] text-ink">Symio</span>
      <p>Symio ne remplace pas un avis médical.</p>
      <div className="flex items-center gap-6">
        <a href="/confidentialite" className="transition-colors hover:text-ink">
          Politique de confidentialité
        </a>
        <p>© 2026 Symio</p>
      </div>
    </footer>
  );
}
