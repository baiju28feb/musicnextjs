/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // Allow Unsplash images
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;