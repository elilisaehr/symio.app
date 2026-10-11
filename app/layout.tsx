import type { Metadata, Viewport } from "next";
import "@fontsource-variable/outfit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symio, le suivi de symptômes pour les maladies chroniques",
  description:
    "Symio, l’app iPhone gratuite qui suit tes symptômes, ton humeur et tes traitements, puis prépare un résumé pour ton médecin.",
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
