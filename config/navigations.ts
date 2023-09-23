import { paths } from "@/config/paths";

export const navigations = [
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
    href: paths.admissions,
    links: [
      {
        label: "Admission Guidelines",
        href: paths.admission_guidelines,
      },
      {
        label: "Registration",
        href: paths.admission_registration,
        target: "_blank",
      },
      {
        label: "Announcement",
        href: paths.admission_announcement,
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
];
