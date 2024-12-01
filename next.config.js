const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    domains: [
      'images.unsplash.com',
      'ik.imagekit.io'
    ]
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: [
      '@radix-ui/react-icons',
      'lucide-react'
    ]
  }, 
  typescript: {
    ignoreBuildErrors: true 
  }
};

module.exports = withBundleAnalyzer(nextConfig);