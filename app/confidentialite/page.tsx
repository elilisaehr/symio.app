import type { Metadata } from "next";
import { A, Field, H3, LegalSection, LegalShell, List } from "@/components/legal";
import { HOST, POLICY_UPDATED, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Tes données de santé restent sur ton iPhone. Ce que Symio enregistre, ce qu’elle ne fait pas, et tes droits.",
  alternates: { canonical: "/confidentialite/" },
};

const TOC = [
  { id: "en-bref", label: "En bref" },
  { id: "responsable", label: "Qui est responsable" },
  { id: "app", label: "1. L’app Symio" },
  { id: "site", label: "2. Le site symio.ch" },
  { id: "ecrire", label: "3. Si tu nous écris" },
  { id: "droits", label: "Tes droits" },
  { id: "age", label: "Âge" },
  { id: "avertissement", label: "Avertissement" },
  { id: "modifications", label: "Modifications" },
  { id: "contact", label: "Contact" },
];

const title = (id: string) => TOC.find((t) => t.id === id)!.label;
const Mail = () => <A href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</A>;

export default function PrivacyPolicy() {
  return (
    <LegalShell title="Politique de confidentialité" updated={POLICY_UPDATED} toc={TOC}>
      <section id="en-bref" className="scroll-mt-28 rounded-[var(--radius-card)] bg-accent-soft p-7 md:p-9">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[28px]">{title("en-bref")}</h2>
        <p className="mt-4 text-[18px] leading-relaxed text-ink">
          Symio est un journal de symptômes pour iPhone. Tes données de santé restent sur ton téléphone. Symio n’a pas de serveur
          pour les recevoir : personne, pas même nous, ne peut les consulter.
        </p>
      </section>

      <LegalSection id="responsable" title={title("responsable")}>
        <p>
          Symio est publiée par <Field value={PUBLISHER.name} />, <Field value={PUBLISHER.street} />,{" "}
          <Field value={PUBLISHER.postcodeCity} />, {PUBLISHER.country} (« nous »). Pour toute question sur tes données, écris à{" "}
          <Mail />.
        </p>
        <p>
          Cette politique s’applique à l’app Symio et au site symio.ch. Elle suit la loi fédérale suisse sur la protection des
          données (nLPD) et, lorsqu’il s’applique, le règlement européen sur la protection des données (RGPD).
        </p>
      </LegalSection>

      <LegalSection id="app" title={title("app")}>
        <H3>Ce que l’app enregistre</H3>
        <p>Ces données sont enregistrées sur ton iPhone uniquement, et chiffrées :</p>
        <List>
          <li>tes check-ins : comment tu te sens, tes symptômes et leur intensité, les zones de douleur, ton sommeil, tes notes ;</li>
          <li>tes traitements : nom, dose, fréquence, dates de début et d’arrêt, raison de l’arrêt ;</li>
          <li>les maladies que tu as choisies, si tu l’as fait ;</li>
          <li>ton prénom, si tu l’as indiqué ;</li>
          <li>tes réglages : heure du rappel, verrouillage, apparence.</li>
        </List>
        <p>
          <strong>Symio ne te demande ni compte, ni adresse e-mail, ni numéro de téléphone.</strong> Elle n’accède ni à Apple Santé,
          ni à tes contacts, ni à ta position, ni à tes photos, ni à ton micro.
        </p>

        <H3>Ce que l’app ne fait pas</H3>
        <p>
          Symio n’envoie aucune de ces données sur internet. Il n’y a ni publicité, ni outil de suivi, ni outil d’analyse tiers, ni
          profilage, ni revente de données.
        </p>

        <H3>Autorisations</H3>
        <List>
          <li>
            <strong>Notifications :</strong> les rappels sont programmés directement sur ton téléphone. Aucun serveur n’intervient.
          </li>
          <li>
            <strong>Face ID :</strong> Symio le demande seulement si tu actives le verrouillage. C’est iOS qui reconnaît ton visage.
            Symio reçoit seulement la réponse « réussi » ou « échoué », jamais ton visage.
          </li>
        </List>

        <H3>Quand des données quittent ton téléphone</H3>
        <p>Cela n’arrive que si tu le demandes :</p>
        <List>
          <li>
            <strong>Résumé pour ton médecin :</strong> un PDF de tes symptômes, de ton humeur et de tes traitements ;
          </li>
          <li>
            <strong>Export :</strong> un fichier tableur (CSV) de tes check-ins.
          </li>
        </List>
        <p>
          Ces fichiers ne sont pas chiffrés. Tu choisis à qui les envoyer avec le menu de partage de l’iPhone. Symio efface sa copie
          temporaire juste après. Une fois partagés, ces fichiers ne sont plus sous la protection de Symio. Range-les dans un
          endroit sûr.
        </p>

        <H3>Sauvegardes</H3>
        <p>
          Si la sauvegarde iCloud ou la sauvegarde sur ordinateur de ton iPhone est activée, les données de Symio y sont incluses,
          comme celles de tes autres apps. Ces sauvegardes sont gérées par Apple et par toi, selon tes réglages.
        </p>

        <H3>Informations transmises par Apple</H3>
        <p>
          Si tu as accepté, dans les réglages de ton iPhone, de partager les données d’analyse avec les développeurs, Apple nous
          transmet des rapports de plantage anonymes et des statistiques globales, par exemple le nombre d’installations. Ils ne
          contiennent aucune donnée de santé.
        </p>

        <H3>Durée de conservation et suppression</H3>
        <p>
          Tes données restent sur ton téléphone jusqu’à ce que tu les supprimes, dans{" "}
          <strong>Profil → Supprimer toutes mes données</strong>. Supprimer l’app efface aussi ses données, sauf celles contenues
          dans tes sauvegardes.
        </p>
      </LegalSection>

      <LegalSection id="site" title={title("site")}>
        <p>
          Le site est hébergé par {HOST.name}, aux États-Unis. À chaque visite, l’hébergeur enregistre automatiquement des
          informations techniques : adresse IP, type de navigateur, page consultée, date et heure. Elles servent à afficher le
          site et à le protéger contre les abus, et sont conservées peu de temps. Elles peuvent être traitées aux États-Unis, selon
          la politique de confidentialité de Vercel (<A href={HOST.privacyUrl}>vercel.com/legal/privacy-policy</A>).
        </p>
        <p>Le site n’utilise ni cookies, ni outil de mesure d’audience, ni publicité.</p>
      </LegalSection>

      <LegalSection id="ecrire" title={title("ecrire")}>
        <p>
          Si tu nous contactes par e-mail, nous utilisons ton adresse et ton message uniquement pour te répondre. Nous les
          supprimons au plus tard 12 mois après notre dernier échange. Évite d’y mettre des détails de santé que tu ne veux pas
          partager.
        </p>
      </LegalSection>

      <LegalSection id="droits" title={title("droits")}>
        <p>Directement dans l’app, tu peux à tout moment consulter, modifier, exporter ou supprimer toutes tes données.</p>
        <p>
          Tu peux aussi nous écrire à <Mail /> pour demander quelles données nous avons sur toi, pour les faire corriger ou
          supprimer, ou pour t’opposer à leur traitement. En pratique, il s’agit seulement de tes e-mails : nous n’avons aucune
          donnée de santé.
        </p>
        <p>
          Si tu penses que tes droits ne sont pas respectés, tu peux t’adresser au Préposé fédéral à la protection des données et à
          la transparence (PFPDT, <A href="https://www.edoeb.admin.ch">edoeb.admin.ch</A>) ou, si tu vis dans l’Union européenne,
          à l’autorité de protection des données de ton pays.
        </p>
      </LegalSection>

      <LegalSection id="age" title={title("age")}>
        <p>Symio est destinée aux personnes de 18 ans et plus.</p>
      </LegalSection>

      <LegalSection id="avertissement" title={title("avertissement")}>
        <p>
          Symio ne remplace pas un avis médical. En cas d’urgence, appelle le <strong>144</strong> (Suisse) ou le numéro d’urgence
          de ton pays.
        </p>
      </LegalSection>

      <LegalSection id="modifications" title={title("modifications")}>
        <p>Si cette politique change, nous mettrons à jour la date ci-dessus et nous te le dirons dans l’app.</p>
      </LegalSection>

      <LegalSection id="contact" title={title("contact")}>
        <p>
          <strong>E-mail :</strong> <Mail />
        </p>
      </LegalSection>
    </LegalShell>
  );
}
