/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/claudio-cv',
  trailingSlash: true,
}

module.exports = nextConfig
