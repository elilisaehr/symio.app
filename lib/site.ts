// Adresse publique du site, utilisée pour les aperçus de partage (Open Graph).
// Sur Vercel, l'adresse de production est détectée toute seule.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://symio.ch");

// TODO: remplacer par le lien App Store définitif de Symio.
export const APP_STORE_URL = "https://apps.apple.com/fr/app/symio";

// TODO: identifiant App Store (les chiffres après « id » dans le lien de l'app).
// Une fois rempli, la Smart App Banner s'affiche sur iPhone.
export const APP_STORE_ID = "";

// Texte officiel du badge Apple en français, aussi utilisé comme texte alternatif.
export const CTA_LABEL = "Télécharger dans l’App Store";

// Badge officiel Apple, noir. À remplacer par la version française
// (toolbox.marketingtools.apple.com) en gardant le même nom de fichier.
export const APP_STORE_BADGE = "/badges/app-store-badge.svg";

// Éditeur du site et de l'app (mentions légales et politique de confidentialité).
// TODO: à compléter avant publication. Un champ vide affiche « À compléter ».
export const PUBLISHER = {
  name: "", // nom et prénom, ou raison sociale
  legalForm: "", // ex. « Entreprise individuelle », « Sàrl », vide si particulier
  ide: "", // numéro IDE (CHE-xxx.xxx.xxx), si inscrit au registre du commerce
  street: "",
  postcodeCity: "",
  country: "Suisse",
  email: "support@symio.ch",
};

export const CONTACT_EMAIL = PUBLISHER.email;

// Hébergeur du site. À adapter si le site n'est pas publié sur Vercel.
export const HOST = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  url: "https://vercel.com",
};

export const POLICY_UPDATED = "11 octobre 2026";

// Photos générées (Higgsfield). À télécharger dans /public/photos puis
// remplacer ces URL par "/photos/<nom>.png".
const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3K8jLjXEyN8j4ZQvmtlQvANtTWE";

export const PHOTOS = {
  heroMatin: `${HF}/hf_20261011_094552_f6382f8b-ac5c-45bf-b571-29dd692a38dd.png`,
  consultation: `${HF}/hf_20261011_094644_976f93c9-affc-4ed3-9aaa-12742699592b.png`,
  soir: `${HF}/hf_20261011_095035_3f8797b4-351b-493d-b000-d4a10dc70604.png`,
} as const;

export type ScreenName =
  | "01-accueil"
  | "02-check-in"
  | "03-rapports"
  | "04-traitements"
  | "05-traitement-detail"
  | "06-resume-medecin"
  | "07-profil";
