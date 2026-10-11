# symio.ch

Site de présentation de l'app iPhone Symio. Next.js en export statique, hébergé chez Infomaniak.

## Développer

```bash
npm install
npm run dev        # http://localhost:3000
```

## Publier sur Infomaniak

### Depuis GitHub

L'envoi chez Infomaniak est prêt (`.github/workflows/deploy-infomaniak.yml`), en mode manuel tant que
l'hébergeur n'est pas confirmé : GitHub → onglet Actions → « Deploy to Infomaniak » → Run workflow.
Pour l'envoyer à chaque modification de `main`, voir le commentaire en tête du fichier.

Une seule fois, ajouter ces secrets dans GitHub → Settings → Secrets and variables → Actions :

| Secret | Où le trouver dans le Manager Infomaniak |
| --- | --- |
| `INFOMANIAK_SFTP_HOST` | Hébergement Web → FTP / SSH : nom du serveur (ex. `xxxx.ftp.infomaniak.com`) |
| `INFOMANIAK_SFTP_USER` | même page : utilisateur FTP/SSH |
| `INFOMANIAK_SFTP_PASSWORD` | mot de passe de cet utilisateur |
| `INFOMANIAK_SFTP_PATH` | dossier du site symio.ch sur le serveur (ex. `/sites/symio.ch`) |

L'envoi remplace le contenu de ce dossier par le site : ne pas y ranger d'autres fichiers.

### À la main

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
- `PHOTOS` : photos du site (dans `public/photos/`).

Le badge App Store est `public/badges/app-store-badge.svg` (badge officiel Apple).
L'image de partage `public/og.png` se régénère depuis `scripts/og.html`.
Les captures d'écran d'origine sont dans `design/app-screens/` ; le site utilise leurs versions WebP de `public/app-screens/`.
