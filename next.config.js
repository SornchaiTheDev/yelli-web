/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "images.unsplash.com",
      "photos.smugmug.com",
      "placekitten.com",
      "cdn1.iconfinder.com",
      "cdn2.iconfinder.com",
      "cdn3.iconfinder.com",
      "cdn4.iconfinder.com"
    ],
  },
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "th",
  },
};

module.exports = nextConfig;
