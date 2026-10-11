import type { Metadata } from "next";
import { A, Field, LegalSection, LegalShell, List } from "@/components/legal";
import { HOST, POLICY_UPDATED, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Tes données de santé restent sur ton iPhone. Ce que Symio enregistre, ce qu’elle ne fait pas, et tes droits.",
  alternates: { canonical: "/confidentialite" },
};

// Same text as the policy shown in the app (src/content/legal.ts and fr.json in the app repo,
// itself the draft of PRIVACY.md part B), plus the publisher, website and contact sections.
const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "editeur", label: "Qui publie Symio" },
  { id: "enregistre", label: "Ce que Symio enregistre" },
  { id: "ne-fait-pas", label: "Ce que Symio ne fait pas" },
  { id: "sauvegardes", label: "Sauvegardes" },
  { id: "sorties", label: "Quand des données quittent ton téléphone" },
  { id: "apple", label: "Informations transmises par Apple" },
  { id: "site", label: "Ce site web" },
  { id: "droits", label: "Tes droits" },
  { id: "age", label: "Âge" },
  { id: "avertissement", label: "Avertissement" },
  { id: "modifications", label: "Modifications" },
  { id: "contact", label: "Contact" },
];

const title = (id: string) => TOC.find((t) => t.id === id)!.label;

export default function PrivacyPolicy() {
  return (
    <LegalShell title="Politique de confidentialité" updated={POLICY_UPDATED} toc={TOC}>
      <section id="en-bref" className="scroll-mt-28 rounded-[var(--radius-card)] bg-accent-soft p-7 md:p-9">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[28px]">{title("en-bref")}</h2>
        <p className="mt-4 text-[18px] leading-relaxed text-ink">
          Symio est un journal de symptômes. Tes données de santé restent sur ton téléphone. Nous n’avons pas de serveur pour les
          recevoir, et personne, pas même nous, ne peut les consulter.
        </p>
      </section>

      <LegalSection id="editeur" title={title("editeur")}>
        <p>
          Symio est publiée par <Field value={PUBLISHER.name} />, <Field value={PUBLISHER.street} />,{" "}
          <Field value={PUBLISHER.postcodeCity} />, {PUBLISHER.country}. Pour toute question, écris-nous à{" "}
          <A href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</A>. Plus de détails dans les{" "}
          <A href="/mentions-legales">mentions légales</A>.
        </p>
      </LegalSection>

      <LegalSection id="enregistre" title={title("enregistre")}>
        <p>Sur ton téléphone uniquement, et chiffré :</p>
        <List>
          <li>tes check-ins (comment tu te sens, tes symptômes, les zones de douleur, tes notes) ;</li>
          <li>tes crises ;</li>
          <li>tes traitements (nom et dates) ;</li>
          <li>les maladies que tu as choisies, si tu l’as fait ;</li>
          <li>ton prénom, si tu l’as indiqué ;</li>
          <li>tes réglages (heure du rappel, verrouillage).</li>
        </List>
        <p>
          <strong>Symio ne te demande ni compte, ni adresse e-mail, ni numéro de téléphone.</strong>
        </p>
      </LegalSection>

      <LegalSection id="ne-fait-pas" title={title("ne-fait-pas")}>
        <p>
          Symio n’envoie aucune de ces données sur internet. Il n’y a ni publicité, ni outil de suivi, ni revente de données.
        </p>
      </LegalSection>

      <LegalSection id="sauvegardes" title={title("sauvegardes")}>
        <p>
          Si la sauvegarde iCloud ou la sauvegarde sur ordinateur de ton iPhone est activée, les données de Symio y sont incluses,
          comme celles de tes autres apps. Ces sauvegardes sont gérées par Apple et par toi, selon tes réglages.
        </p>
      </LegalSection>

      <LegalSection id="sorties" title={title("sorties")}>
        <p>Uniquement quand tu le décides :</p>
        <List>
          <li>
            <strong>Export :</strong> tu peux exporter tes données dans un fichier. Ce fichier n’est pas chiffré ; range-le dans un
            endroit sûr.
          </li>
          <li>
            <strong>Résumé pour ton médecin :</strong> tu peux créer un PDF et le partager avec qui tu veux.
          </li>
        </List>
        <p>Une fois partagés, ces fichiers ne sont plus sous la protection de Symio.</p>
      </LegalSection>

      <LegalSection id="apple" title={title("apple")}>
        <p>
          Si tu as accepté de partager tes données d’analyse avec les développeurs dans les réglages de ton iPhone, Apple nous
          transmet des rapports de plantage anonymes et des statistiques d’utilisation agrégées (par exemple le nombre
          d’installations). Ils ne contiennent pas tes données de santé.
        </p>
      </LegalSection>

      <LegalSection id="site" title={title("site")}>
        <p>
          Ce site ne dépose aucun cookie et n’utilise aucun outil de mesure d’audience ni de suivi. Comme tout site web, il est
          servi par un hébergeur ({HOST.name}), qui peut enregistrer des données techniques (adresse IP, type de navigateur, date
          de la visite) pour assurer la sécurité et le bon fonctionnement du service.
        </p>
      </LegalSection>

      <LegalSection id="droits" title={title("droits")}>
        <p>Directement dans l’app, tu peux à tout moment :</p>
        <List>
          <li>consulter et modifier toutes tes données ;</li>
          <li>les exporter ;</li>
          <li>
            les supprimer définitivement (<strong>Profil → Supprimer toutes mes données</strong>).
          </li>
        </List>
        <p>Supprimer l’app de ton téléphone efface aussi ses données, sauf celles contenues dans tes sauvegardes.</p>
      </LegalSection>

      <LegalSection id="age" title={title("age")}>
        <p>Symio est destinée aux personnes de 18 ans et plus.</p>
      </LegalSection>

      <LegalSection id="avertissement" title={title("avertissement")}>
        <p>
          Symio ne remplace pas un avis médical. En cas d’urgence, appelle le <strong>144</strong>.
        </p>
      </LegalSection>

      <LegalSection id="modifications" title={title("modifications")}>
        <p>Si cette politique change, nous l’indiquerons dans l’app et sur cette page, avec une nouvelle date de mise à jour.</p>
      </LegalSection>

      <LegalSection id="contact" title={title("contact")}>
        <p>
          Pour toute question sur cette politique ou sur tes données, écris-nous à{" "}
          <A href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</A>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
