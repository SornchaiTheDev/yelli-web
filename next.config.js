/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "images.unsplash.com"],
  },
  i18n: {
    locales: ["en", "cn", "jp", "th"],
    defaultLocale: "th",
  },
};

module.exports = nextConfig;
