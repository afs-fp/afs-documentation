import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  basePath: '/afs-documentation',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
}

export default nextConfig
