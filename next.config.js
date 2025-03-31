/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  basePath: "/musicnextjs", // Change this to your repo name
  assetPrefix: "/musicnextjs/", // Ensures assets load correctly
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true, // Required for GitHub Pages
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;