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
        protocol: "https",
        hostname: "sd.mitrakasih.sch.id",
      },
      {
        protocol: "https",
        hostname: "smp.mitrakasih.sch.id",
      },
      {
        protocol: "https",
        hostname: "sma.mitrakasih.sch.id",
      },
      // <== FOR DEVELOPMENT ONLY <==
    ],
  },
};

module.exports = nextConfig;
