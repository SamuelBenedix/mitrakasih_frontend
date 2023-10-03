import { paths } from "@/config/paths";

export const navigations = [
  {
    label: "About",
    href: paths.about,
    links: [
      {
        label: "Tentang Sekolah",
        href: paths.about_campus,
      },
      {
        label: "Visi dan Misi",
        href: paths.about_mission_vision,
      },
      {
        label: "Sambutan Kepala Sekolah",
        href: paths.about_school_leadership,
      },
    ],
  },

  {
    label: "Admissions",
    href: paths.admissions,
    links: [
      {
        label: "Informasi Pendaftaran",
        href: paths.admission_guidelines,
      },
      {
        label: "Pendaftaran Calon Siswa Baru",
        href: paths.admission_registration,
        target: "_blank",
      },
      {
        label: "Pengumuman Calon Siswa Baru",
        href: paths.admission_announcement,
      },
    ],
  },

  {
    label: "Academics",
    href: paths.academics,
    links: [
      {
        label: "Nursery Kindergarten",
        href: paths.academics_early_years,
      },
      {
        label: "Primary School",
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
    links: [
      // {
      //   label: "Nursery Kindergarten Activities",
      //   href: paths.academics_early_years,
      // },
      {
        label: "Primary School Activities",
        href: paths.activities_blog_sd,
      },
      {
        label: "Middle School Activities",
        href: paths.activities_blog_smp,
      },
      {
        label: "High School Activities",
        href: paths.activities_blog_sma,
      },
    ],
  },
  {
    label: "Login",
    href: '#',
    links: [
      {
        label: "Login Primary School",
        href: paths.login_sd,
      },
      {
        label: "Login Middle School",
        href: paths.login_smp,
      },
      {
        label: "Login High School",
        href: paths.login_sma,
      },
    ],
  },

  // {
  //   label: "Activities",
  //   href: paths.activities,
  // },

  // {
  //   label: "News",
  //   href: paths.news,
  // },
];
