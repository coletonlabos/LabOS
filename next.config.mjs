/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  // Disable static optimization for all pages
  output: 'standalone',
};

export default nextConfig;
