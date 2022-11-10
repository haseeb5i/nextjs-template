const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextTranslate(nextConfig);
