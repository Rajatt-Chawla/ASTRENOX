/** @type {import('next').NextConfig} */
const nextConfig = {
  // App directory is now stable in Next.js 15+
  outputFileTracingRoot: __dirname,
  experimental: {
    // Optimize build performance
    optimizePackageImports: ['lucide-react', 'framer-motion']
  }
}

module.exports = nextConfig
