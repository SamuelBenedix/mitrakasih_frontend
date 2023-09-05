import { paths } from "@/config/paths";

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

  navigations: [
    {
      label: "About",
      href: paths.about,
      links: [
        {
          label: "Campuses",
          href: paths.about_campus,
        },
        {
          label: "Mission and Vision",
          href: paths.about_mission_vision,
        },
        {
          label: "School Leadership",
          href: paths.about_school_leadership,
        },
      ],
    },

    {
      label: "Admissions",
      href: paths.admission,
      links: [
        {
          label: "Admission Guidelines",
          href: paths.admission_guidelines,
        },
      ],
    },

    {
      label: "Academics",
      href: paths.academics,
      links: [
        {
          label: "Early Years",
          href: paths.academics_early_years,
        },
        {
          label: "Elementary Schools",
          href: paths.academics_elementary_school,
        },
        {
          label: "Middle School",
          href: paths.academics_middle_school,
        },
        {
          label: "High School",
          href: paths.academics_high_school,
        },
      ],
    },

    {
      label: "Activities",
      href: paths.activities,
    },

    {
      label: "News",
      href: paths.news,
    },
  ],
};
