import type { Metadata } from "next";
import { A, Field, LegalSection, LegalShell } from "@/components/legal";
import { HOST, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergement et informations légales du site symio.ch.",
  alternates: { canonical: "/mentions-legales/" },
};

const TOC = [
  { id: "editeur", label: "Éditeur" },
  { id: "hebergement", label: "Hébergement du site" },
  { id: "distribution", label: "Distribution de l’app" },
  { id: "medical", label: "Avertissement médical" },
  { id: "responsabilite", label: "Responsabilité" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "credits", label: "Crédits" },
  { id: "droit", label: "Droit applicable" },
];

const title = (id: string) => TOC.find((t) => t.id === id)!.label;

export default function LegalNotice() {
  return (
    <LegalShell title="Mentions légales" toc={TOC}>
      <LegalSection id="editeur" title={title("editeur")}>
        <address className="not-italic">
          <span className="text-ink">
            <Field value={PUBLISHER.name} />
          </span>
          <br />
          <Field value={PUBLISHER.street} />
          <br />
          <Field value={PUBLISHER.postcodeCity} />
          <br />
          {PUBLISHER.country}
          <br />
          E-mail : <A href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</A>
        </address>
        <p>Symio est publiée par un particulier, sans inscription au registre du commerce.</p>
      </LegalSection>

      <LegalSection id="hebergement" title={title("hebergement")}>
        <p>
          {HOST.name}
          <br />
          {HOST.address}
          <br />
          <A href={HOST.url}>{HOST.url.replace("https://www.", "")}</A>
        </p>
      </LegalSection>

      <LegalSection id="distribution" title={title("distribution")}>
        <p>
          L’app Symio est distribuée par l’App Store d’Apple, selon les conditions d’Apple. Apple, le logo Apple, iPhone et App
          Store sont des marques d’Apple Inc.
        </p>
      </LegalSection>

      <LegalSection id="medical" title={title("medical")}>
        <p>
          Symio est un journal personnel, pas un dispositif médical. Elle ne pose pas de diagnostic et ne remplace pas un avis
          médical : parle toujours de ta santé avec ton médecin. En cas d’urgence, appelle le <strong>144</strong>.
        </p>
      </LegalSection>

      <LegalSection id="responsabilite" title={title("responsabilite")}>
        <p>
          Nous faisons de notre mieux pour que les informations de ce site soient exactes et à jour, sans pouvoir le garantir. Nous
          ne sommes pas responsables du contenu des sites externes vers lesquels ce site renvoie.
        </p>
      </LegalSection>

      <LegalSection id="propriete" title={title("propriete")}>
        <p>
          Les textes, le nom Symio, le logo et les visuels de ce site appartiennent à l’éditeur. Toute reproduction demande son
          accord préalable.
        </p>
      </LegalSection>

      <LegalSection id="credits" title={title("credits")}>
        <p>Certaines photos de ce site ont été générées par intelligence artificielle.</p>
      </LegalSection>

      <LegalSection id="droit" title={title("droit")}>
        <p>
          Le droit suisse s’applique. Le for est au domicile de l’éditeur, sous réserve des règles impératives qui protègent les
          consommateurs.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
