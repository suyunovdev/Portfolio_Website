/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "eu-cap-network.ec.europa.eu", // 1-rasmning domeni
      "imageio.forbes.com", // 2-3-4-rasmlar domeni
      "kslux.uz",
      "img.goodfon.ru",
      "www.webpackaging.com",
      "ui-lib.com",
      "s3.amazonaws.com",
      "mir-s3-cdn-cf.behance.net", // 6-rasmning domeni
    ],
  },
};

export default nextConfig;
