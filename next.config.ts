import type { NextConfig } from "next";

// Static export for Infomaniak: `npm run build` writes the whole site to out/,
// to upload as-is to the web root. No Node server is needed.
const nextConfig: NextConfig = {
  output: "export",
  // Every page becomes a folder with an index.html (e.g. /confidentialite/), which any web server serves.
  trailingSlash: true,
  // No image server on static hosting: images are pre-compressed in public/.
  images: { unoptimized: true },
};

export default nextConfig;
