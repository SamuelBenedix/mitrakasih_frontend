export const host = "https://www.mitrakasih.sch.id";
export const app = {
  title: "Mitra Kasih",

  description: "",

  lang: "id",

  images: {
    logo: "https://www.mitrakasih.sch.id/images/logo.png",

    logoWhite: "https://www.mitrakasih.sch.id/images/logo_white.png",

    school: "https://www.mitrakasih.sch.id/images/school.png",
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
    // 'sd': "https://sd.mitrakasih.sch.id/public",
    // 'smp': "https://smp.mitrakasih.sch.id/public",
    // 'sma': "https://sma.mitrakasih.sch.id/public",
    'sd': "http://sd.com:8000",
    'smp': "http://smp.com:8001",
    'sma': "http://sma.com:8002",
  },
};
