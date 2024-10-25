import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repoName = 'afs-documentation'

const nextConfig: NextConfig = {
  //basePath: isProd ? `/${repoName}` : '',
  basePath: '',
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true },
}

export default nextConfig
