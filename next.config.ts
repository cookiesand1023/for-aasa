import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/api/.well-known/apple-app-site-association',
      },
      {
        source: '/.well-known/assetlinks.json',
        destination: '/api/.well-known/assetlinks.json',
      },
    ];
  },
};

export default nextConfig;
