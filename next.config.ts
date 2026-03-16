import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "komki.ghost.io",
        pathname: "/content/images/**",
      },
      // Ghost Pro CDN
      {
        protocol: "https",
        hostname: "*.ghost.io",
        pathname: "/content/images/**",
      },
      // komki 커스텀 도메인
      {
        protocol: "https",
        hostname: "www.komki.co.kr",
        pathname: "/content/images/**",
      },
    ],
  },
};

export default nextConfig;
