import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    remotePatterns: [{ hostname: 'doodleipsum.com' }],
  },
};

export default nextConfig;
