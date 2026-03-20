import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // Oculta el badge "N" de Next.js en desarrollo
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
