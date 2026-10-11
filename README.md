# symio.ch

Site de présentation de l'app iPhone Symio. Next.js, hébergé sur Vercel.

## Développer

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publier

Le site est hébergé sur **Vercel**, relié à ce dépôt GitHub. Chaque modification poussée sur la branche
de production (réglée dans Vercel → Settings → Git, en général `main`) est publiée automatiquement sur symio.ch.
Les autres branches ont une adresse d'aperçu.

Le nom de domaine symio.ch est enregistré chez Infomaniak ; sa zone DNS pointe vers Vercel.
Dans Vercel → Settings → Domains, régler `www.symio.ch` pour qu'il redirige vers `symio.ch`.

## Réglages

Tout ce qui est propre au site est dans `lib/site.ts` :

- `PUBLISHER` : nom et adresse de l'éditeur (pages légales) ;
- `POLICY_UPDATED` : date de la politique de confidentialité ;
- `APP_STORE_URL` et `APP_STORE_ID` : lien de l'app et Smart App Banner ;
- `PHOTOS` : photos du site (dans `public/photos/`).

Le badge App Store est `public/badges/app-store-badge.svg` (badge officiel Apple).
L'image de partage `public/og.png` se régénère depuis `scripts/og.html`.
Les captures d'écran d'origine sont dans `design/app-screens/` ; le site utilise leurs versions WebP de `public/app-screens/`.
