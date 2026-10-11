// Domaine du site : canonique, aperçus de partage, plan du site.
export const SITE_URL = "https://symio.ch";

// TODO: remplacer par le lien App Store définitif de Symio.
export const APP_STORE_URL = "https://apps.apple.com/ch/app/symio";

// TODO: identifiant App Store (les chiffres après « id » dans le lien de l'app).
// Une fois rempli, la Smart App Banner s'affiche sur iPhone.
export const APP_STORE_ID = "";

// Texte officiel du badge Apple en français, aussi utilisé comme texte alternatif.
export const CTA_LABEL = "Télécharger dans l’App Store";

// Badge officiel Apple, noir. À remplacer par la version française
// (toolbox.marketingtools.apple.com) en gardant le même nom de fichier.
export const APP_STORE_BADGE = "/badges/app-store-badge.svg";

// Éditeur (particulier, sans inscription au registre du commerce).
// TODO: à compléter avant publication. Un champ vide affiche « À compléter ».
export const PUBLISHER = {
  name: "", // Prénom Nom
  street: "",
  postcodeCity: "",
  country: "Suisse",
  email: "support@symio.ch",
};

export const CONTACT_EMAIL = PUBLISHER.email;

// Hébergeur du site. Le nom de domaine symio.ch est enregistré chez Infomaniak.
export const HOST = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
  url: "https://vercel.com",
  privacyUrl: "https://vercel.com/legal/privacy-policy",
};

export const REGISTRAR = "Infomaniak Network SA, Genève, Suisse";

// TODO: date de publication de la politique (ex. « 1er novembre 2026 »).
export const POLICY_UPDATED = "";

// Photos générées par IA (crédit dans les mentions légales), hébergées sur le site.
export const PHOTOS = {
  heroMatin: "/photos/hero-matin.webp",
  consultation: "/photos/consultation.webp",
  soir: "/photos/soir.webp",
} as const;

export type ScreenName =
  | "01-accueil"
  | "02-check-in"
  | "03-rapports"
  | "04-traitements"
  | "05-traitement-detail"
  | "06-resume-medecin"
  | "07-profil";
