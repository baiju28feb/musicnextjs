/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This replaces the next export command
  images: {
    domains: ["images.unsplash.com"], // Allow Unsplash images
    unoptimized: true, // Required for static export with images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;