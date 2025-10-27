import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns : [ new URL('https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png')]
  }
};

export default nextConfig;
