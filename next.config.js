/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'http://localhost:3001'
    ],
  },
}

module.exports = nextConfig
