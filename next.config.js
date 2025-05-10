/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    ignoreDuringDev: true
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig 