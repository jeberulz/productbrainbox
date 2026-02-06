import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Disable x-powered-by header
  poweredByHeader: false,
  // Enable React strict mode
  reactStrictMode: true,
}

export default nextConfig
