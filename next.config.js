/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      `https://coffee-shop-be-dio.herokuapp.com`
    ],
  },
}

module.exports = nextConfig
