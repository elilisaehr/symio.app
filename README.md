# symio.ch

Site de présentation de l'app iPhone Symio. Next.js en export statique, hébergé chez Infomaniak.

## Développer

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publier sur Infomaniak

```bash
npm run build      # écrit tout le site dans out/
```

Puis envoyer **le contenu** du dossier `out/` à la racine du site symio.ch chez Infomaniak
(Manager Infomaniak → Hébergement Web → symio.ch → Gestionnaire de fichiers, ou en SFTP).
Le fichier caché `out/.htaccess` doit être envoyé aussi : il gère la redirection `/privacy`,
le HTTPS, la page 404, la compression et le cache.

## Réglages

Tout ce qui est propre au site est dans `lib/site.ts` :

- `PUBLISHER` : nom et adresse de l'éditeur (pages légales) ;
- `POLICY_UPDATED` : date de la politique de confidentialité ;
- `APP_STORE_URL` et `APP_STORE_ID` : lien de l'app et Smart App Banner ;
- `PHOTOS` : photos du site (à déposer dans `public/photos/`).

Le badge App Store est `public/badges/app-store-badge.svg` (badge officiel Apple).
L'image de partage `public/og.png` se régénère depuis `scripts/og.html`.
Les captures d'écran d'origine sont dans `design/app-screens/` ; le site utilise leurs versions WebP de `public/app-screens/`.
