export const app = {
  title: "Mitra Kasih",

  description: "",

  lang: "id",

  images: {
    logo: "/images/logo.png",

    logoWhite: "/images/logo_white.png",

    school: "/images/school.png",
  },

  links: {
    contactUs: "",
    workAtJis: "",
    privacyPolicy: "",
    siteMap: "",
    accessibility: "",

    facebook: "",
    instagram: "",
    x: "",
    youtube: "",
    linkedIn: "",
  },
  env: process.env.NODE_ENV,
  blog_url: {
    sd: process.env.NODE_ENV === 'development' ? "http://sd.com:8000" : "https://sd.mitrakasih.sch.id/public",
    smp: process.env.NODE_ENV === 'development' ? "http://smp.com:8001" : "https://smp.mitrakasih.sch.id/public",
    sma: process.env.NODE_ENV === 'development' ? "http://sma.com:8002" : "https://sma.mitrakasih.sch.id/public",
  },
};
