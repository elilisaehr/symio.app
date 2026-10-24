import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "./globals.css";
import { APP_STORE_ID, SITE_URL } from "@/lib/site";

const description =
  "L’app gratuite, sur iPhone et Android, pour suivre tes symptômes, ton humeur et tes traitements, et préparer un résumé pour ton médecin. Sans compte : tout reste sur ton téléphone.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Symio, le suivi de symptômes pour les maladies chroniques",
    template: "%s, Symio",
  },
  description,
  applicationName: "Symio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_CH",
    siteName: "Symio",
    title: "Symio, note ta journée en un tap",
    description,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Symio, l’app de suivi des symptômes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Symio, note ta journée en un tap",
    description,
    images: ["/og.png"],
  },
  // Smart App Banner on iPhone, once the App Store ID is known (lib/site.ts).
  ...(APP_STORE_ID ? { itunes: { appId: APP_STORE_ID } } : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f3f8" },
    { media: "(prefers-color-scheme: dark)", color: "#11111b" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-[100dvh] bg-bg text-ink">{children}</body>
    </html>
  );
}
