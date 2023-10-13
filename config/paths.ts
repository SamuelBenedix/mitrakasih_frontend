import { app } from "./app";


export const paths = {
  home: "/",

  about: "/about",

  about_campus: "/about/campus",

  about_mission_vision: "/about/mission-vision",

  about_school_leadership: "/about/school-leadership",

  academics: "/academics",

  academics_early_years: "/academics/early-years",
  academics_elementary_school: "/academics/elementary-school",
  academics_middle_school: "/academics/middle-school",
  academics_high_school: "/academics/high-school",

  activities: "/activities",

  activities_blog: "/activities/blogs",
  activities_blog_sd: "/activities/blogs/sd",
  activities_blog_smp: "/activities/blogs/smp",
  activities_blog_sma: "/activities/blogs/sma",

  news: "/news",

  admissions: "/admissions",

  admission_guidelines: "/admissions/guidelines",

  admission_registration:
    "https://sd.mitrakasih.sch.id/register/student",

  admission_announcement: "/admissions/announcement",

  login_sd: `${app.blog_url.sd}/login`,
  login_smp: `${app.blog_url.smp}/login`,
  login_sma: `${app.blog_url.sma}/login`,

};
