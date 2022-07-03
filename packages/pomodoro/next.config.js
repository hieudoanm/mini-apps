/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/mini-apps/pomodoro/' : '',
  reactStrictMode: true,
};

console.log('nextConfig', nextConfig);

module.exports = nextConfig;
