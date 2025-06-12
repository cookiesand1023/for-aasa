import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/api/.well-known/apple-app-site-association',
      },
      {
        source: '/invitation',
        has: [{ type: 'host', value: 'link.cookiesand1023.com' }],
        destination: '/app-link',
      },
    ];
  },
};

export default nextConfig;
