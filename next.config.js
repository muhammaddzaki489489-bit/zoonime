/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['axios', 'cheerio'],
  },
};

module.exports = nextConfig;