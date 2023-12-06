/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['samplebuckect-100222233.s3.amazonaws.com'],
  },
};
// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });

    return config;
  },
});

module.exports = nextConfig;
