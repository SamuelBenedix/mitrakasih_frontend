/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    // unoptimized: true,
    remotePatterns: [
      // ==> FOR DEVELOPMENT ONLY ==>
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "www.mitrakasih.sch.id",
      },
      {
        protocol: "https",
        hostname: "placehold.it",
      },
      {
        protocol: process.env.NODE_ENV === "development" ? "http" : "https",
        hostname:
          process.env.NODE_ENV === "development"
            ? "sd.com"
            : "sd.mitrakasih.sch.id/public",
        port: process.env.NODE_ENV === "development" ? "8000" : "443",
      },
      // <== FOR DEVELOPMENT ONLY <==
    ],
  },
};

module.exports = nextConfig;
