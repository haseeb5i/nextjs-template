const nextTranslate = require("next-translate");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "sr", "es"],
    defaultLocale: "en",
  },
};

module.exports = withBundleAnalyzer(nextTranslate(nextConfig));
