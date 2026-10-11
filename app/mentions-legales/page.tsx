import type { Metadata } from "next";
import { A, Field, LegalSection, LegalShell } from "@/components/legal";
import { HOST, PUBLISHER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Éditeur, hébergement et informations légales du site Symio.",
  alternates: { canonical: "/mentions-legales" },
};

const TOC = [
  { id: "editeur", label: "Éditeur" },
  { id: "hebergement", label: "Hébergement" },
  { id: "propriete", label: "Propriété intellectuelle" },
  { id: "marques", label: "Marques" },
  { id: "medical", label: "Avertissement médical" },
  { id: "donnees", label: "Données personnelles" },
  { id: "droit", label: "Droit applicable" },
];

const title = (id: string) => TOC.find((t) => t.id === id)!.label;

export default function LegalNotice() {
  return (
    <LegalShell title="Mentions légales" toc={TOC}>
      <LegalSection id="editeur" title={title("editeur")}>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[auto_1fr]">
          <dt className="font-semibold text-ink">Nom</dt>
          <dd>
            <Field value={PUBLISHER.name} />
          </dd>
          {PUBLISHER.legalForm && (
            <>
              <dt className="font-semibold text-ink">Forme juridique</dt>
              <dd>{PUBLISHER.legalForm}</dd>
            </>
          )}
          {PUBLISHER.ide && (
            <>
              <dt className="font-semibold text-ink">Numéro IDE</dt>
              <dd>{PUBLISHER.ide}</dd>
            </>
          )}
          <dt className="font-semibold text-ink">Adresse</dt>
          <dd>
            <Field value={PUBLISHER.street} />
            <br />
            <Field value={PUBLISHER.postcodeCity} />
            <br />
            {PUBLISHER.country}
          </dd>
          <dt className="font-semibold text-ink">E-mail</dt>
          <dd>
            <A href={`mailto:${PUBLISHER.email}`}>{PUBLISHER.email}</A>
          </dd>
          <dt className="font-semibold text-ink">Responsable de la publication</dt>
          <dd>
            <Field value={PUBLISHER.name} />
          </dd>
        </dl>
      </LegalSection>

      <LegalSection id="hebergement" title={title("hebergement")}>
        <p>
          Ce site est hébergé par {HOST.name}, {HOST.address} (<A href={HOST.url}>{HOST.url.replace("https://", "")}</A>).
        </p>
      </LegalSection>

      <LegalSection id="propriete" title={title("propriete")}>
        <p>
          Les textes, images, captures d’écran et le logo de ce site et de l’app Symio sont protégés. Leur reproduction, totale ou
          partielle, sans autorisation écrite de l’éditeur est interdite.
        </p>
      </LegalSection>

      <LegalSection id="marques" title={title("marques")}>
        <p>Apple, le logo Apple, iPhone, Face ID, iCloud et App Store sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays.</p>
      </LegalSection>

      <LegalSection id="medical" title={title("medical")}>
        <p>
          Symio est un journal de santé personnel. L’app et ce site ne remplacent pas un avis médical ni ton médecin. En cas
          d’urgence, appelle le <strong>144</strong> (Suisse) ou le numéro d’urgence de ton pays.
        </p>
      </LegalSection>

      <LegalSection id="donnees" title={title("donnees")}>
        <p>
          Ce site ne dépose aucun cookie et n’utilise aucun outil de suivi. Pour savoir comment l’app traite tes données, lis la{" "}
          <A href="/confidentialite">politique de confidentialité</A>.
        </p>
      </LegalSection>

      <LegalSection id="droit" title={title("droit")}>
        <p>Ce site et ces mentions sont régis par le droit suisse.</p>
      </LegalSection>
    </LegalShell>
  );
}
