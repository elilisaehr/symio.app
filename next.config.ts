import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // symio.ch/privacy is the address named in the privacy policy.
  async redirects() {
    return [{ source: "/privacy", destination: "/confidentialite", permanent: true }];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" }],
  },
};

export default nextConfig;
