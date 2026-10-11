import type { NextConfig } from "next";

// Hosted on Vercel (domain symio.ch registered at Infomaniak, DNS pointing to Vercel).
const nextConfig: NextConfig = {
  // Pages live at /confidentialite/, /mentions-legales/ (same addresses as the canonical URLs).
  trailingSlash: true,
  // Images are pre-compressed WebP in public/, served as-is.
  images: { unoptimized: true },
  // symio.ch/privacy is the address cited in the app.
  async redirects() {
    return [{ source: "/privacy", destination: "/confidentialite/", permanent: true }];
  },
};

export default nextConfig;
