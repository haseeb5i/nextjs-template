const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextTranslate(nextConfig);
