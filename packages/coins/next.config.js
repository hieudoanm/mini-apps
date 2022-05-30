/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/mini-apps/coins/' : '',
  reactStrictMode: true,
};

console.log('nextConfig', nextConfig);

module.exports = nextConfig;
