// TODO: remplacer par le lien App Store définitif de Symio.
export const APP_STORE_URL = "https://apps.apple.com/fr/app/symio";

export const CONTACT_EMAIL = "support@symio.ch";

// TODO: adresse postale (rue, NPA, ville). Laissée vide dans la politique Termly ("__________").
export const POSTAL_ADDRESS = "";

export const CTA_LABEL = "Télécharger sur l’App Store";

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
