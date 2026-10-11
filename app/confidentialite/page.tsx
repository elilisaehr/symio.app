import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Nav } from "@/components/sections/Nav";
import { CONTACT_EMAIL, POSTAL_ADDRESS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité, Symio",
  description: "Comment Symio traite tes informations personnelles, et quels sont tes droits.",
};

const TOC = [
  { id: "infocollect", label: "Quelles informations collectons-nous ?" },
  { id: "infouse", label: "Comment traitons-nous vos informations ?" },
  { id: "legalbases", label: "Sur quelles bases juridiques nous appuyons-nous pour traiter vos informations personnelles ?" },
  { id: "whoshare", label: "Quand et avec qui partageons-nous vos informations personnelles ?" },
  { id: "inforetain", label: "Combien de temps conservons-nous vos informations ?" },
  { id: "infosafe", label: "Comment protégeons-nous vos informations ?" },
  { id: "infominors", label: "Collectons-nous des informations auprès de mineurs ?" },
  { id: "privacyrights", label: "Quels sont vos droits en matière de vie privée ?" },
  { id: "DNT", label: "Paramètres « Do Not Track »" },
  { id: "uslaws", label: "Les résidents des États-Unis disposent-ils de droits spécifiques ?" },
  { id: "policyupdates", label: "Mettons-nous à jour cette politique ?" },
  { id: "contact", label: "Comment nous contacter au sujet de cette politique ?" },
  { id: "request", label: "Comment consulter, mettre à jour ou supprimer les données que nous collectons ?" },
];

const US_CATEGORIES = [
  ["A. Identifiants", "Coordonnées, telles que nom réel, pseudonyme, adresse postale, numéro de téléphone fixe ou mobile, identifiant personnel unique, identifiant en ligne, adresse IP, adresse e-mail et nom de compte", false],
  ["B. Informations personnelles au sens de la loi californienne sur les dossiers clients (California Customer Records)", "Nom, coordonnées, formation, emploi, parcours professionnel et informations financières", true],
  ["C. Caractéristiques protégées par la loi d’un État ou la loi fédérale", "Genre, âge, date de naissance, origine raciale et ethnique, origine nationale, situation familiale et autres données démographiques", false],
  ["D. Informations commerciales", "Informations de transaction, historique d’achats, données financières et informations de paiement", false],
  ["E. Informations biométriques", "Empreintes digitales et empreintes vocales", true],
  ["F. Activité sur Internet ou sur un réseau similaire", "Historique de navigation, historique de recherche, comportement en ligne, centres d’intérêt et interactions avec nos sites, applications, systèmes et publicités, ainsi qu’avec ceux de tiers", false],
  ["G. Données de géolocalisation", "Position de l’appareil", false],
  ["H. Informations audio, électroniques, sensorielles ou similaires", "Images et enregistrements audio, vidéo ou d’appels créés dans le cadre de nos activités", false],
  ["I. Informations professionnelles", "Coordonnées professionnelles pour vous fournir nos Services dans un cadre professionnel, ou intitulé de poste, parcours professionnel et qualifications si vous postulez chez nous", false],
  ["J. Informations sur la formation", "Dossiers scolaires et informations d’annuaire", false],
  ["K. Déductions tirées des informations personnelles collectées", "Déductions tirées de toute information personnelle listée ci-dessus pour créer un profil ou un résumé, par exemple sur les préférences et les caractéristiques d’une personne", false],
  ["L. Informations personnelles sensibles", "Données de santé", true],
] as const;

function Section({ id, n, title, children }: { id: string; n: number; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line pt-12">
      <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-[28px]">
        <span className="text-accent">{n}.</span> {title}
      </h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function Short({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-[var(--radius-card)] bg-accent-soft px-6 py-5 text-[17px] leading-relaxed text-ink">
      <strong className="font-semibold">En bref : </strong>
      {children}
    </p>
  );
}

function H3({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h3 id={id} className="scroll-mt-28 pt-4 text-lg font-semibold tracking-[-0.01em] text-ink">
      {children}
    </h3>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-5 marker:text-accent">{children}</ul>;
}

function A({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

const Mail = () => <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>;
const RightsPage = () => <A href="/confidentialite">symio.ch/privacy</A>;
const ContactLink = () => (
  <>
    « <A href="#contact">Comment nous contacter au sujet de cette politique ?</A> »
  </>
);

export default function PrivacyPolicy() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-7xl px-4 pb-28 pt-14 sm:px-6 md:pt-20">
        <header className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] md:text-6xl">Politique de confidentialité</h1>
          <p className="mt-5 text-[17px] text-muted">Dernière mise à jour : 10 octobre 2026</p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="hidden lg:col-span-4 lg:block xl:col-span-3">
            <nav aria-label="Sommaire" className="sticky top-28 max-h-[calc(100dvh-8rem)] overflow-y-auto pr-4">
              <p className="text-[15px] font-semibold text-ink">Sommaire</p>
              <ol className="mt-4 space-y-2.5 text-[14px] leading-snug text-muted">
                {TOC.map((t, i) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="flex gap-2 transition-colors hover:text-ink">
                      <span className="w-5 shrink-0 tabular-nums text-accent">{i + 1}.</span>
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-[70ch] space-y-12 text-[17px] leading-relaxed text-muted lg:col-span-8 xl:col-span-8 xl:col-start-5 [&_strong]:text-ink">
            <div className="space-y-5">
              <p>
                La présente politique de confidentialité de Symio (« nous », « notre » ou « nos ») décrit comment et pourquoi nous
                pouvons accéder à vos informations personnelles, les collecter, les conserver, les utiliser et/ou les partager (les
                « traiter ») lorsque vous utilisez nos services (les « Services »), notamment lorsque vous :
              </p>
              <List>
                <li>
                  téléchargez et utilisez notre application mobile (Symio) ou toute autre application de notre part renvoyant à la
                  présente politique de confidentialité ;
                </li>
                <li>interagissez avec nous d’autres manières liées, y compris lors d’actions marketing ou d’événements.</li>
              </List>
              <p>
                <strong>Des questions ou des préoccupations ?</strong> La lecture de cette politique vous aidera à comprendre vos droits et
                vos choix en matière de vie privée. Nous sommes responsables des décisions relatives au traitement de vos informations
                personnelles. Si vous n’êtes pas d’accord avec nos politiques et pratiques, veuillez ne pas utiliser nos Services. Pour
                toute question ou préoccupation, contactez-nous à <Mail />.
              </p>
            </div>

            <section className="space-y-5 rounded-[var(--radius-card)] bg-surface p-7 shadow-soft md:p-10">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[28px]">Résumé des points clés</h2>
              <p className="italic">
                Ce résumé reprend les points clés de notre politique de confidentialité. Vous trouverez plus de détails sur chaque sujet
                en suivant le lien après chaque point, ou en utilisant le <A href="#toc">sommaire</A> ci-dessous.
              </p>
              <p>
                <strong>Quelles informations personnelles traitons-nous ?</strong> Lorsque vous consultez, utilisez ou parcourez nos
                Services, nous pouvons traiter des informations personnelles selon la manière dont vous interagissez avec nous et avec
                les Services, les choix que vous faites, et les produits et fonctionnalités que vous utilisez. En savoir plus sur{" "}
                <A href="#personalinfo">les informations personnelles que vous nous communiquez</A>.
              </p>
              <p>
                <strong>Traitons-nous des informations personnelles sensibles ?</strong> Certaines informations peuvent être considérées
                comme « particulières » ou « sensibles » dans certaines juridictions, par exemple vos origines raciales ou ethniques,
                votre orientation sexuelle et vos convictions religieuses. Nous pouvons traiter des informations personnelles sensibles
                lorsque cela est nécessaire, avec votre consentement ou dans les autres cas permis par la loi applicable. En savoir plus
                sur <A href="#sensitiveinfo">les informations sensibles que nous traitons</A>.
              </p>
              <p>
                <strong>Collectons-nous des informations auprès de tiers ?</strong> Nous ne collectons aucune information auprès de tiers.
              </p>
              <p>
                <strong>Comment traitons-nous vos informations ?</strong> Nous traitons vos informations pour fournir, améliorer et
                administrer nos Services, communiquer avec vous, assurer la sécurité et prévenir la fraude, et respecter la loi. Nous
                pouvons également traiter vos informations à d’autres fins avec votre consentement. Nous ne traitons vos informations que
                lorsque nous disposons d’un motif juridique valable. En savoir plus sur{" "}
                <A href="#infouse">la manière dont nous traitons vos informations</A>.
              </p>
              <p>
                <strong>Dans quelles situations et avec quelles parties partageons-nous des informations personnelles ?</strong> Nous
                pouvons partager des informations dans des situations spécifiques et avec des tiers spécifiques. En savoir plus sur{" "}
                <A href="#whoshare">quand et avec qui nous partageons vos informations personnelles</A>.
              </p>
              <p>
                <strong>Comment protégeons-nous vos informations ?</strong> Nous avons mis en place des processus et des procédures
                organisationnels et techniques adéquats pour protéger vos informations personnelles. Cependant, aucune transmission
                électronique sur Internet ni aucune technologie de stockage ne peut être garantie sûre à 100 %. Nous ne pouvons donc pas
                promettre ni garantir que des pirates, des cybercriminels ou d’autres tiers non autorisés ne parviendront pas à déjouer
                nos mesures de sécurité et à collecter, consulter, voler ou modifier vos informations de manière illégitime. En savoir
                plus sur <A href="#infosafe">la façon dont nous protégeons vos informations</A>.
              </p>
              <p>
                <strong>Quels sont vos droits ?</strong> Selon l’endroit où vous vous trouvez, la loi applicable en matière de protection
                des données peut vous accorder certains droits sur vos informations personnelles. En savoir plus sur{" "}
                <A href="#privacyrights">vos droits en matière de vie privée</A>.
              </p>
              <p>
                <strong>Comment exercer vos droits ?</strong> Le moyen le plus simple d’exercer vos droits est de consulter <RightsPage />{" "}
                ou de nous contacter. Nous examinerons toute demande et y donnerons suite conformément aux lois applicables en matière de
                protection des données.
              </p>
              <p>
                Vous voulez en savoir plus sur ce que nous faisons des informations collectées ?{" "}
                <A href="#toc">Lisez la politique de confidentialité dans son intégralité</A>.
              </p>
            </section>

            <section id="toc" className="scroll-mt-28">
              <h2 className="text-2xl font-semibold tracking-[-0.02em] text-ink">Sommaire</h2>
              <ol className="mt-5 space-y-3">
                {TOC.map((t, i) => (
                  <li key={t.id} className="flex gap-2">
                    <span className="w-6 shrink-0 tabular-nums text-accent">{i + 1}.</span>
                    <A href={`#${t.id}`}>{t.label}</A>
                  </li>
                ))}
              </ol>
            </section>

            <Section id="infocollect" n={1} title={TOC[0].label}>
              <H3 id="personalinfo">Informations personnelles que vous nous communiquez</H3>
              <Short>Nous collectons les informations personnelles que vous nous fournissez.</Short>
              <p>
                Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous manifestez votre
                intérêt pour obtenir des informations sur nous ou sur nos produits et Services, lorsque vous participez à des activités
                sur les Services, ou plus généralement lorsque vous nous contactez.
              </p>
              <p>
                <strong>Informations personnelles fournies par vous.</strong> Les informations personnelles que nous collectons dépendent
                du contexte de vos interactions avec nous et avec les Services, des choix que vous faites, et des produits et
                fonctionnalités que vous utilisez. Elles peuvent inclure :
              </p>
              <List>
                <li>noms ;</li>
                <li>maladies ;</li>
                <li>symptômes ;</li>
                <li>traitements.</li>
              </List>
              <p id="sensitiveinfo" className="scroll-mt-28">
                <strong>Informations sensibles.</strong> Lorsque cela est nécessaire, avec votre consentement ou dans les autres cas
                permis par la loi applicable, nous traitons les catégories d’informations sensibles suivantes :
              </p>
              <List>
                <li>données de santé.</li>
              </List>
              <p>
                <strong>Données de l’application.</strong> Si vous utilisez notre ou nos applications, nous pouvons également collecter
                les informations suivantes si vous choisissez de nous en donner l’accès ou l’autorisation :
              </p>
              <List>
                <li>
                  <em>Notifications push.</em> Nous pouvons vous demander l’autorisation de vous envoyer des notifications push concernant
                  votre compte ou certaines fonctionnalités de l’application. Si vous ne souhaitez plus recevoir ce type de
                  communications, vous pouvez les désactiver dans les réglages de votre appareil.
                </li>
              </List>
              <p>
                Ces informations sont principalement nécessaires pour assurer la sécurité et le fonctionnement de notre ou nos
                applications, pour le dépannage, ainsi qu’à des fins d’analyse et de reporting internes.
              </p>
              <p>
                Toutes les informations personnelles que vous nous fournissez doivent être véridiques, complètes et exactes, et vous
                devez nous informer de toute modification de ces informations.
              </p>
            </Section>

            <Section id="infouse" n={2} title={TOC[1].label}>
              <Short>
                Nous traitons vos informations pour fournir, améliorer et administrer nos Services, communiquer avec vous, assurer la
                sécurité et prévenir la fraude, et respecter la loi. Nous traitons les informations personnelles aux fins énumérées
                ci-dessous. Nous ne pouvons traiter vos informations à d’autres fins qu’avec votre consentement explicite préalable.
              </Short>
              <p>
                <strong>
                  Nous traitons vos informations personnelles pour diverses raisons, selon la manière dont vous interagissez avec nos
                  Services, notamment :
                </strong>
              </p>
              <List>
                <li>
                  <strong>Pour fournir les services à l’utilisateur et en faciliter la fourniture.</strong> Nous pouvons traiter vos
                  informations pour vous fournir le service demandé.
                </li>
                <li>
                  <strong>Pour sauvegarder ou protéger l’intérêt vital d’une personne.</strong> Nous pouvons traiter vos informations
                  lorsque cela est nécessaire pour sauvegarder ou protéger l’intérêt vital d’une personne, par exemple pour prévenir un
                  préjudice.
                </li>
              </List>
            </Section>

            <Section id="legalbases" n={3} title={TOC[2].label}>
              <Short>
                Nous ne traitons vos informations personnelles que lorsque nous estimons que c’est nécessaire et que nous disposons d’un
                motif juridique valable (c’est-à-dire d’une base légale) au regard de la loi applicable : votre consentement, le respect
                de la loi, la fourniture de services pour conclure ou exécuter nos obligations contractuelles, la protection de vos
                droits, ou la poursuite de nos intérêts commerciaux légitimes.
              </Short>
              <H3>Si vous vous trouvez dans l’UE ou au Royaume-Uni, cette section vous concerne.</H3>
              <p>
                Le Règlement général sur la protection des données (RGPD) et le RGPD britannique nous imposent d’expliquer les bases
                légales valables sur lesquelles nous nous appuyons pour traiter vos informations personnelles. À ce titre, nous pouvons
                nous appuyer sur les bases légales suivantes :
              </p>
              <List>
                <li>
                  <strong>Consentement.</strong> Nous pouvons traiter vos informations si vous nous avez donné l’autorisation
                  (c’est-à-dire votre consentement) d’utiliser vos informations personnelles dans un but précis. Vous pouvez retirer
                  votre consentement à tout moment. En savoir plus sur <A href="#withdrawconsent">le retrait de votre consentement</A>.
                </li>
                <li>
                  <strong>Exécution d’un contrat.</strong> Nous pouvons traiter vos informations personnelles lorsque nous estimons que
                  c’est nécessaire pour remplir nos obligations contractuelles envers vous, y compris la fourniture de nos Services, ou
                  à votre demande avant la conclusion d’un contrat avec vous.
                </li>
                <li>
                  <strong>Obligations légales.</strong> Nous pouvons traiter vos informations lorsque nous estimons que c’est nécessaire
                  pour respecter nos obligations légales, par exemple pour coopérer avec un organisme chargé de l’application de la loi
                  ou une autorité de régulation, exercer ou défendre nos droits, ou communiquer vos informations comme preuve dans un
                  litige auquel nous sommes partie.
                </li>
                <li>
                  <strong>Intérêts vitaux.</strong> Nous pouvons traiter vos informations lorsque nous estimons que c’est nécessaire pour
                  protéger vos intérêts vitaux ou ceux d’un tiers, par exemple en cas de menace potentielle pour la sécurité d’une
                  personne.
                </li>
              </List>
              <H3>Si vous vous trouvez au Canada, cette section vous concerne.</H3>
              <p>
                Nous pouvons traiter vos informations si vous nous avez donné une autorisation spécifique (c’est-à-dire un consentement
                exprès) d’utiliser vos informations personnelles dans un but précis, ou lorsque votre autorisation peut être déduite
                (c’est-à-dire un consentement tacite). Vous pouvez <A href="#withdrawconsent">retirer votre consentement</A> à tout
                moment.
              </p>
              <p>
                Dans certains cas exceptionnels, la loi applicable peut nous autoriser à traiter vos informations sans votre
                consentement, notamment :
              </p>
              <List>
                <li>si la collecte est manifestement dans l’intérêt d’une personne et que le consentement ne peut pas être obtenu en temps utile ;</li>
                <li>pour des enquêtes, ainsi que pour la détection et la prévention de la fraude ;</li>
                <li>pour des transactions commerciales, sous réserve de certaines conditions ;</li>
                <li>
                  si les informations figurent dans une déclaration de témoin et que la collecte est nécessaire pour évaluer, traiter ou
                  régler une demande d’indemnisation d’assurance ;
                </li>
                <li>pour identifier des personnes blessées, malades ou décédées et communiquer avec leurs proches ;</li>
                <li>si nous avons des motifs raisonnables de croire qu’une personne a été, est ou pourrait être victime d’abus financier ;</li>
                <li>
                  s’il est raisonnable de penser que la collecte et l’utilisation avec consentement compromettraient la disponibilité ou
                  l’exactitude des informations, et que la collecte est raisonnable à des fins d’enquête sur la violation d’un accord ou
                  une infraction aux lois du Canada ou d’une province ;
                </li>
                <li>
                  si la communication est exigée pour se conformer à une assignation, un mandat, une ordonnance judiciaire ou des règles
                  de procédure relatives à la production de documents ;
                </li>
                <li>
                  si les informations ont été produites par une personne dans le cadre de son emploi, de son activité ou de sa
                  profession, et que la collecte est conforme aux fins pour lesquelles elles ont été produites ;
                </li>
                <li>si la collecte est faite uniquement à des fins journalistiques, artistiques ou littéraires ;</li>
                <li>si les informations sont accessibles au public et désignées par la réglementation ;</li>
                <li>
                  nous pouvons communiquer des informations dépersonnalisées pour des projets de recherche ou de statistiques approuvés,
                  sous réserve d’un contrôle éthique et d’engagements de confidentialité.
                </li>
              </List>
            </Section>

            <Section id="whoshare" n={4} title={TOC[3].label}>
              <Short>
                Nous pouvons partager des informations dans les situations spécifiques décrites dans cette section et/ou avec les tiers
                suivants.
              </Short>
              <p>Nous pouvons être amenés à partager vos informations personnelles dans les situations suivantes :</p>
              <List>
                <li>
                  <strong>Transferts d’entreprise.</strong> Nous pouvons partager ou transférer vos informations dans le cadre ou au
                  cours de négociations d’une fusion, d’une vente d’actifs de l’entreprise, d’un financement ou de l’acquisition de tout
                  ou partie de notre activité par une autre société.
                </li>
              </List>
            </Section>

            <Section id="inforetain" n={5} title={TOC[4].label}>
              <Short>
                Nous conservons vos informations aussi longtemps que nécessaire pour atteindre les finalités décrites dans la présente
                politique de confidentialité, sauf si la loi exige une autre durée.
              </Short>
              <p>
                Nous ne conservons vos informations personnelles que pendant la durée nécessaire aux finalités énoncées dans la présente
                politique, sauf si une durée de conservation plus longue est exigée ou autorisée par la loi (par exemple pour des
                obligations fiscales, comptables ou autres obligations légales).
              </p>
              <p>
                Lorsque nous n’avons plus de besoin commercial légitime de traiter vos informations personnelles, nous les supprimons ou
                les anonymisons ou, si cela n’est pas possible (par exemple parce qu’elles sont stockées dans des archives de
                sauvegarde), nous les conservons de manière sécurisée et les isolons de tout traitement ultérieur jusqu’à ce que leur
                suppression soit possible.
              </p>
            </Section>

            <Section id="infosafe" n={6} title={TOC[5].label}>
              <Short>
                Nous cherchons à protéger vos informations personnelles au moyen d’un ensemble de mesures de sécurité organisationnelles
                et techniques.
              </Short>
              <p>
                Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées et raisonnables, conçues pour
                protéger les informations personnelles que nous traitons. Toutefois, malgré nos protections et nos efforts, aucune
                transmission électronique sur Internet ni aucune technologie de stockage de l’information ne peut être garantie sûre à
                100 %. Nous ne pouvons donc pas promettre ni garantir que des pirates, des cybercriminels ou d’autres tiers non autorisés
                ne parviendront pas à déjouer nos mesures de sécurité et à collecter, consulter, voler ou modifier vos informations de
                manière illégitime. Bien que nous fassions de notre mieux pour protéger vos informations personnelles, leur transmission
                vers et depuis nos Services se fait à vos propres risques. Vous ne devriez accéder aux Services que dans un environnement
                sécurisé.
              </p>
            </Section>

            <Section id="infominors" n={7} title={TOC[6].label}>
              <Short>
                Nous ne collectons pas sciemment de données auprès d’enfants de moins de 18 ans, ou de l’âge équivalent prévu par la loi
                de votre juridiction, et ne leur adressons pas de marketing.
              </Short>
              <p>
                Nous ne collectons pas sciemment de données auprès d’enfants de moins de 18 ans ou de l’âge équivalent prévu par la loi
                de votre juridiction, ne les sollicitons pas, ne leur adressons pas de marketing et ne vendons pas sciemment de telles
                informations personnelles. En utilisant les Services, vous déclarez avoir au moins 18 ans ou l’âge équivalent prévu par
                la loi de votre juridiction, ou être le parent ou le tuteur légal d’un tel mineur et consentir à son utilisation des
                Services. Si nous apprenons que des informations personnelles d’utilisateurs de moins de 18 ans ou de l’âge équivalent
                prévu par la loi de votre juridiction ont été collectées, nous désactiverons le compte et prendrons des mesures
                raisonnables pour supprimer rapidement ces données de nos registres. Si vous avez connaissance de données que nous
                aurions collectées auprès d’enfants de moins de 18 ans ou de l’âge équivalent prévu par la loi de votre juridiction,
                veuillez nous contacter à <Mail />.
              </p>
            </Section>

            <Section id="privacyrights" n={8} title={TOC[7].label}>
              <Short>
                Selon votre État de résidence aux États-Unis ou dans certaines régions, comme l’Espace économique européen (EEE), le
                Royaume-Uni, la Suisse et le Canada, vous disposez de droits qui vous donnent un meilleur accès à vos informations
                personnelles et un meilleur contrôle sur celles-ci. Vous pouvez consulter, modifier ou clôturer votre compte à tout
                moment, selon votre pays, province ou État de résidence.
              </Short>
              <p>
                Dans certaines régions (comme l’EEE, le Royaume-Uni, la Suisse et le Canada), vous disposez de certains droits en vertu
                des lois applicables en matière de protection des données. Il peut s’agir du droit (i) de demander l’accès à vos
                informations personnelles et d’en obtenir une copie, (ii) d’en demander la rectification ou l’effacement, (iii) de
                limiter le traitement de vos informations personnelles, (iv) le cas échéant, à la portabilité des données, et (v) de ne
                pas faire l’objet d’une décision automatisée. Si une décision produisant des effets juridiques ou des effets similaires
                importants est prise uniquement par des moyens automatisés, nous vous en informerons, vous en expliquerons les
                principaux facteurs et vous proposerons un moyen simple de demander un réexamen humain. Dans certaines circonstances,
                vous pouvez également avoir le droit de vous opposer au traitement de vos informations personnelles. Vous pouvez
                formuler une telle demande en nous contactant grâce aux coordonnées indiquées dans la section <ContactLink /> ci-dessous.
              </p>
              <p>Nous examinerons toute demande et y donnerons suite conformément aux lois applicables en matière de protection des données.</p>
              <p>
                Si vous vous trouvez au Royaume-Uni et que la manière dont nous avons traité vos informations personnelles ne vous
                satisfait pas, vous pouvez déposer une réclamation directement auprès de nous. Ce droit s’ajoute à ceux dont vous disposez
                en vertu du RGPD britannique et du Data Protection Act 2018.
              </p>
              <p>Comment nous contacter :</p>
              <List>
                <li>
                  <strong>E-mail :</strong> <Mail />
                </li>
              </List>
              <p>Ce qui se passe après votre réclamation :</p>
              <List>
                <li>Nous accuserons réception de votre réclamation dans les 30 jours suivant sa réception.</li>
                <li>Nous l’examinerons sans retard injustifié ou excessif.</li>
                <li>Nous vous tiendrons informé de son avancement et vous en expliquerons l’issue.</li>
              </List>
              <p>
                Si notre réponse finale ne vous satisfait pas, vous pouvez soumettre votre réclamation à l’Information Commissioner’s
                Office (ICO), l’autorité de contrôle britannique.
              </p>
              <List>
                <li>
                  <strong>Site web :</strong> <A href="http://ico.org.uk/make-a-complaint">ico.org.uk/make-a-complaint</A>
                </li>
                <li>
                  <strong>Téléphone :</strong> 0303 123 1113
                </li>
                <li>
                  <strong>Courrier :</strong> Information Commissioner’s Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                </li>
              </List>
              <p>
                Si vous vous trouvez dans l’EEE ou au Royaume-Uni et pensez que nous traitons illégalement vos informations personnelles,
                vous avez également le droit de déposer une réclamation auprès de{" "}
                <A href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                  l’autorité de protection des données de votre État membre
                </A>{" "}
                ou de{" "}
                <A href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
                  l’autorité de protection des données du Royaume-Uni
                </A>
                .
              </p>
              <p>
                Si vous vous trouvez en Suisse, vous pouvez contacter le{" "}
                <A href="https://www.edoeb.admin.ch/edoeb/en/home.html">Préposé fédéral à la protection des données et à la transparence</A>.
              </p>
              <H3 id="withdrawconsent">Retrait de votre consentement</H3>
              <p>
                Si nous nous appuyons sur votre consentement pour traiter vos informations personnelles, qui peut être exprès et/ou
                tacite selon la loi applicable, vous avez le droit de le retirer à tout moment, en nous contactant grâce aux
                coordonnées indiquées dans la section <ContactLink /> ci-dessous.
              </p>
              <p>
                Veuillez toutefois noter que cela n’affectera pas la licéité du traitement effectué avant ce retrait ni, lorsque la loi
                applicable le permet, le traitement de vos informations personnelles fondé sur d’autres bases légales que le
                consentement.
              </p>
              <p>
                Pour toute question ou remarque sur vos droits en matière de vie privée, vous pouvez nous écrire à <Mail />.
              </p>
            </Section>

            <Section id="DNT" n={9} title={TOC[8].label}>
              <p>
                La plupart des navigateurs web, ainsi que certains systèmes d’exploitation et applications mobiles, proposent une
                fonction ou un réglage « Do Not Track » (« DNT », ne pas suivre) que vous pouvez activer pour signaler votre souhait que
                les données relatives à vos activités de navigation en ligne ne soient ni surveillées ni collectées. À ce jour, aucune
                norme technologique uniforme pour reconnaître et mettre en œuvre les signaux DNT n’a été finalisée. Par conséquent, nous
                ne répondons pas actuellement aux signaux DNT des navigateurs ni à tout autre mécanisme qui communique automatiquement
                votre choix de ne pas être suivi en ligne. Si une norme de suivi en ligne que nous devons respecter est adoptée à
                l’avenir, nous vous informerons de cette pratique dans une version révisée de la présente politique de confidentialité.
              </p>
              <p>
                La loi californienne nous impose d’indiquer comment nous répondons aux signaux DNT des navigateurs. Comme il n’existe
                actuellement aucune norme sectorielle ou légale pour reconnaître ou respecter les signaux DNT, nous n’y répondons pas pour
                le moment.
              </p>
            </Section>

            <Section id="uslaws" n={10} title={TOC[9].label}>
              <Short>
                Si vous résidez en Californie, au Colorado, au Connecticut, au Delaware, en Floride, en Indiana, en Iowa, au Kentucky,
                au Maryland, au Minnesota, au Montana, au Nebraska, au New Hampshire, au New Jersey, en Oregon, au Rhode Island, au
                Tennessee, au Texas, en Utah ou en Virginie, vous pouvez avoir le droit de demander l’accès aux informations
                personnelles que nous détenons sur vous et des détails sur la manière dont nous les avons traitées, d’en corriger les
                inexactitudes, d’en obtenir une copie ou de les supprimer. Vous pouvez également avoir le droit de retirer votre
                consentement au traitement de vos informations personnelles. Ces droits peuvent être limités dans certaines
                circonstances par la loi applicable. Vous trouverez plus d’informations ci-dessous.
              </Short>
              <H3>Catégories d’informations personnelles que nous collectons</H3>
              <p>
                Le tableau ci-dessous présente les catégories d’informations personnelles que nous avons collectées au cours des douze
                (12) derniers mois. Il comprend des exemples illustratifs pour chaque catégorie et ne reflète pas les informations
                personnelles que nous collectons à votre sujet. Pour un inventaire complet de toutes les informations personnelles que
                nous traitons, consultez la section « <A href="#infocollect">Quelles informations collectons-nous ?</A> ».
              </p>
              <div className="overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface">
                <table className="w-full min-w-[620px] border-collapse text-left text-[15px] leading-normal">
                  <thead>
                    <tr className="bg-surface-2 text-ink">
                      <th scope="col" className="w-[34%] px-5 py-4 font-semibold">Catégorie</th>
                      <th scope="col" className="px-5 py-4 font-semibold">Exemples</th>
                      <th scope="col" className="w-[14%] px-5 py-4 font-semibold">Collectées</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {US_CATEGORIES.map(([cat, ex, yes]) => (
                      <tr key={cat} className="align-top">
                        <th scope="row" className="px-5 py-4 font-medium text-ink">{cat}</th>
                        <td className="px-5 py-4">{ex}</td>
                        <td className={`px-5 py-4 ${yes ? "font-semibold text-accent" : ""}`}>{yes ? "Oui" : "Non"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Nous ne collectons des informations personnelles sensibles, au sens des lois applicables en matière de protection de la
                vie privée, qu’aux fins autorisées par la loi ou avec votre consentement. Les informations personnelles sensibles peuvent
                être utilisées ou communiquées à un prestataire ou à un sous-traitant pour des finalités supplémentaires précisées. Vous
                pouvez avoir le droit de limiter l’utilisation ou la communication de vos informations personnelles sensibles. Nous ne
                collectons ni ne traitons d’informations personnelles sensibles dans le but d’en déduire des caractéristiques vous
                concernant.
              </p>
              <p>
                Nous pouvons également collecter d’autres informations personnelles en dehors de ces catégories lorsque vous interagissez
                avec nous en personne, en ligne, par téléphone ou par courrier dans le cadre :
              </p>
              <List>
                <li>de l’assistance fournie via nos canaux de support client ;</li>
                <li>de la participation à des enquêtes clients ou à des concours ; et</li>
                <li>de la fourniture de nos Services et des réponses à vos demandes.</li>
              </List>
              <p>Nous utiliserons et conserverons les informations personnelles collectées aussi longtemps que nécessaire pour fournir les Services, ou :</p>
              <List>
                <li>Catégorie B : tant que l’utilisateur dispose d’un compte chez nous ;</li>
                <li>Catégorie E : tant que l’utilisateur dispose d’un compte chez nous.</li>
              </List>
              <H3>Sources des informations personnelles</H3>
              <p>
                Pour en savoir plus sur les sources des informations personnelles que nous collectons, consultez la section «{" "}
                <A href="#infocollect">Quelles informations collectons-nous ?</A> ».
              </p>
              <H3>Utilisation et partage des informations personnelles</H3>
              <p>
                Pour en savoir plus sur la manière dont nous utilisons vos informations personnelles, consultez la section «{" "}
                <A href="#infouse">Comment traitons-nous vos informations ?</A> ».
              </p>
              <p>
                <strong>Vos informations seront-elles partagées avec d’autres personnes ?</strong>
              </p>
              <p>
                Nous pouvons communiquer vos informations personnelles à nos prestataires de services en vertu d’un contrat écrit conclu
                entre nous et chacun d’eux. Pour en savoir plus sur les destinataires de vos informations personnelles, consultez la
                section « <A href="#whoshare">Quand et avec qui partageons-nous vos informations personnelles ?</A> ».
              </p>
              <p>
                Nous pouvons utiliser vos informations personnelles pour nos propres besoins, par exemple pour mener des recherches
                internes à des fins de développement technologique et de démonstration. Cela n’est pas considéré comme une « vente » de
                vos informations personnelles.
              </p>
              <p>
                Au cours des douze (12) derniers mois, nous n’avons communiqué, vendu ni partagé aucune information personnelle à des
                tiers à des fins professionnelles ou commerciales. À l’avenir, nous ne vendrons ni ne partagerons les informations
                personnelles des visiteurs du site, des utilisateurs ou des autres consommateurs.
              </p>
              <H3>Vos droits</H3>
              <p>
                Vous disposez de droits en vertu de certaines lois sur la protection des données d’États américains. Ces droits ne sont
                toutefois pas absolus et, dans certains cas, nous pouvons refuser votre demande dans la mesure permise par la loi. Ces
                droits comprennent :
              </p>
              <List>
                <li><strong>le droit de savoir</strong> si nous traitons ou non vos données personnelles ;</li>
                <li><strong>le droit d’accéder</strong> à vos données personnelles ;</li>
                <li><strong>le droit de corriger</strong> les inexactitudes de vos données personnelles ;</li>
                <li><strong>le droit de demander</strong> la suppression de vos données personnelles ;</li>
                <li><strong>le droit d’obtenir une copie</strong> des données personnelles que vous nous avez communiquées ;</li>
                <li><strong>le droit à la non-discrimination</strong> lorsque vous exercez vos droits ;</li>
                <li>
                  <strong>le droit de vous opposer</strong> au traitement de vos données personnelles lorsqu’elles sont utilisées à des
                  fins de publicité ciblée (ou de « partage » au sens de la loi californienne sur la vie privée), de vente de données
                  personnelles, ou de profilage en vue de décisions produisant des effets juridiques ou des effets similaires importants
                  (« profilage »).
                </li>
              </List>
              <p>Selon l’État où vous vivez, vous pouvez également disposer des droits suivants :</p>
              <List>
                <li>
                  le droit d’accéder aux catégories de données personnelles traitées (dans la mesure permise par la loi applicable,
                  notamment la loi du Minnesota sur la vie privée) ;
                </li>
                <li>
                  le droit d’obtenir la liste des catégories de tiers auxquels nous avons communiqué des données personnelles (dans la
                  mesure permise par la loi applicable, notamment les lois de Californie, du Delaware et du Maryland) ;
                </li>
                <li>
                  le droit d’obtenir la liste des tiers précis auxquels nous avons communiqué des données personnelles (dans la mesure
                  permise par la loi applicable, notamment les lois du Minnesota et de l’Oregon) ;
                </li>
                <li>
                  le droit d’obtenir la liste des tiers auxquels nous avons vendu des données personnelles (dans la mesure permise par la
                  loi applicable, notamment la loi du Connecticut) ;
                </li>
                <li>
                  le droit d’examiner, de comprendre, de contester et, selon l’endroit où vous vivez, de corriger la manière dont vos
                  données personnelles ont fait l’objet d’un profilage (dans la mesure permise par la loi applicable, notamment les lois
                  du Connecticut et du Minnesota) ;
                </li>
                <li>
                  le droit de limiter l’utilisation et la communication de données personnelles sensibles (dans la mesure permise par la
                  loi applicable, notamment la loi californienne) ;
                </li>
                <li>
                  le droit de vous opposer à la collecte de données sensibles et de données personnelles collectées au moyen d’une
                  fonction de reconnaissance vocale ou faciale (dans la mesure permise par la loi applicable, notamment la loi de
                  Floride).
                </li>
              </List>
              <H3>Comment exercer vos droits</H3>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter en consultant <RightsPage />, en nous écrivant à <Mail />, ou en
                utilisant les coordonnées indiquées à la fin de ce document.
              </p>
              <p>
                En vertu de certaines lois d’États américains sur la protection des données, vous pouvez désigner un mandataire autorisé
                pour formuler une demande en votre nom. Nous pouvons refuser la demande d’un mandataire qui ne fournit pas la preuve qu’il
                a été valablement autorisé à agir en votre nom conformément aux lois applicables.
              </p>
              <H3>Vérification des demandes</H3>
              <p>
                À réception de votre demande, nous devrons vérifier votre identité afin de nous assurer que vous êtes bien la personne
                dont nous détenons les informations dans notre système. Nous n’utiliserons les informations personnelles fournies dans
                votre demande que pour vérifier votre identité ou votre droit d’effectuer la demande. Toutefois, si nous ne pouvons pas
                vérifier votre identité à partir des informations dont nous disposons déjà, nous pourrons vous demander des informations
                supplémentaires à des fins de vérification d’identité, de sécurité ou de prévention de la fraude.
              </p>
              <p>
                Si vous soumettez la demande par l’intermédiaire d’un mandataire autorisé, nous pourrons avoir besoin de recueillir des
                informations supplémentaires pour vérifier votre identité avant de traiter votre demande, et le mandataire devra fournir
                une autorisation écrite et signée de votre part pour soumettre cette demande en votre nom.
              </p>
              <H3>Recours</H3>
              <p>
                En vertu de certaines lois d’États américains sur la protection des données, si nous refusons de donner suite à votre
                demande, vous pouvez faire appel de notre décision en nous écrivant à <Mail />. Nous vous informerons par écrit de toute
                mesure prise ou non prise en réponse à votre recours, avec une explication écrite des motifs de nos décisions. Si votre
                recours est rejeté, vous pouvez déposer une réclamation auprès du procureur général de votre État.
              </p>
              <H3>Loi californienne « Shine The Light »</H3>
              <p>
                L’article 1798.83 du Code civil de Californie, également appelé loi « Shine The Light », permet à nos utilisateurs
                résidant en Californie de nous demander et d’obtenir, une fois par an et gratuitement, des informations sur les
                catégories d’informations personnelles (le cas échéant) que nous avons communiquées à des tiers à des fins de marketing
                direct, ainsi que les noms et adresses de tous les tiers avec lesquels nous avons partagé des informations personnelles
                au cours de l’année civile précédente. Si vous résidez en Californie et souhaitez formuler une telle demande, veuillez
                nous l’adresser par écrit en utilisant les coordonnées indiquées dans la section <ContactLink />.
              </p>
            </Section>

            <Section id="policyupdates" n={11} title={TOC[10].label}>
              <Short>Oui, nous mettrons à jour cette politique autant que nécessaire pour rester en conformité avec les lois applicables.</Short>
              <p>
                Nous pouvons mettre à jour la présente politique de confidentialité de temps à autre. La version mise à jour sera
                signalée par une date de « dernière mise à jour » actualisée en haut de cette politique. En cas de modifications
                importantes, nous pourrons vous en informer soit en publiant un avis bien visible, soit en vous envoyant directement une
                notification. Nous vous encourageons à consulter régulièrement cette politique pour savoir comment nous protégeons vos
                informations.
              </p>
            </Section>

            <Section id="contact" n={12} title={TOC[11].label}>
              <p>
                Pour toute question ou remarque sur cette politique, vous pouvez nous écrire à <Mail /> ou nous contacter par courrier
                à :
              </p>
              <address className="not-italic text-ink">
                Symio
                {POSTAL_ADDRESS && (
                  <>
                    <br />
                    {POSTAL_ADDRESS}
                  </>
                )}
                <br />
                Suisse
              </address>
            </Section>

            <Section id="request" n={13} title={TOC[12].label}>
              <p>
                Vous avez le droit de demander l’accès aux informations personnelles que nous collectons à votre sujet, des détails sur
                la manière dont nous les avons traitées, la correction d’inexactitudes ou la suppression de vos informations
                personnelles. Vous pouvez également avoir le droit de retirer votre consentement au traitement de vos informations
                personnelles. Ces droits peuvent être limités dans certaines circonstances par la loi applicable. Pour demander à
                consulter, mettre à jour ou supprimer vos informations personnelles, rendez-vous sur : <RightsPage />.
              </p>
            </Section>

            <p className="border-t border-line pt-8 text-[15px]">
              Cette politique de confidentialité a été créée avec le{" "}
              <A href="https://termly.io/products/privacy-policy-generator/">générateur de politique de confidentialité de Termly</A>.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
