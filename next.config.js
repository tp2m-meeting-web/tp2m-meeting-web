/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/tp2m-meeting-web',
  assetPrefix: '/tp2m-meeting-web',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
