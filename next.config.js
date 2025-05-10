/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['app', 'components', 'pages']
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    esmExternals: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: 'eslint-loader',
          options: {
            emitWarning: true,
            failOnError: false,
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 