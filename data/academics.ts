import { app } from "@/config/app";
import { paths } from "@/config/paths";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { getNavigation } from "@/lib/utils/utils";
import { Figure, Slides } from "@/types/app";

export const _label: string = "Academics";

export const _pageTitle: string = `Academics`;

export const _pageDescription: string = `Tingkat akademik di Sekolah Mitra Kasih berpusat pada penguasaan pengetahuan dan keterampilan penting, dengan pendekatan holistik yang mencakup pencapaian dalam mata pelajaran utama serta pengembangan kemampuan berpikir kritis, kreatif, dan teknologi.`;

export const _pageImage: string = getRandomImageUrl();

export const _pageQuote: string =
  "Akademik di Sekolah Mitra Kasih adalah landasan pendidikan yang kuat yang memberikan fokus pada penguasaan pengetahuan dan keterampilan esensial, dengan pendekatan holistik yang merangkul keberhasilan siswa dalam mata pelajaran inti serta pengembangan kemampuan berpikir kritis, kreatif, dan berwawasan teknologi.";

export const _about: string[] = [
  "Program akademik di Mitra Kasih merangkul pengembangan jiwa sosial dan emosional siswa, dengan penekanan khusus pada pengembangan keterampilan public speaking yang akan membantu mereka berkomunikasi dengan percaya diri dan efektif dalam berbagai konteks.",
  "Mitra Kasih mengadopsi kurikulum terbaik yang tidak hanya mempersiapkan siswa dengan pengetahuan akademik, tetapi juga menghubungkannya dengan dunia kerja dan lingkungan sosial, memberikan landasan kokoh untuk kesuksesan masa depan.",
  "Sekolah Menengah Pertama Mitra Kasih berkomitmen untuk pembelajaran berbasis riset dan praktik yang menggabungkan pembelajaran intelektual dengan pengalaman fisik, kearifan lokal, dan eksperimen sosial, menciptakan lingkungan pendidikan yang beragam dan mendalam.",
  "Sekolah Menengah Atas Mitra Kasih didedikasikan untuk mendidik siswa-siswa agar siap menghadapi tantangan dunia dengan pengetahuan, keterampilan, dan pemahaman yang kuat.",
];

export const _academicFigures: Figure[] = [
  {
    title: "Nursery Kindergarten",
    image: getRandomImageUrl(),
    description: "Ages 3-6",
    linkLabel: "Find Out More",
    linkHref: paths.academics_early_years,
  },
  {
    title: "Elementary School",
    image: getRandomImageUrl(),
    description: "Grades 1 to 5",
    linkLabel: "Find Out More",
    linkHref: paths.academics_elementary_school,
  },
  {
    title: "Middle School",
    image: getRandomImageUrl(),
    description: "Grades 6 to 8",
    linkLabel: "Find Out More",
    linkHref: paths.academics_middle_school,
  },
  {
    title: "High School",
    image: getRandomImageUrl(),
    description: "Grades 9 to 12",
    linkLabel: "Find Out More",
    linkHref: paths.academics_high_school,
  },
];

export const _reasons: Slides = {
  title: "Reasons To Learn At Mitra Kasih",

  description:
    "Mitra Kasih students learn how to be the best version of themselves and how to be best for the world they live in.",

  slides: [
    {
      title: "Komunitas Kepedulian",
      description:
        "Cara terbaik untuk mempelajari sekolah kami adalah dengan mengalaminya sendiri!",
      linkLabel: "Schedule a Tour Today",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "Say Hello! Inquire With Us Today",
      description: `Hubungi anggota Tim Admisi kami dan ambil langkah pertama untuk bergabung dengan ${app.title}!`,
      linkLabel: "Take the first step",
      linkHref: "",
      image:
        getRandomImageUrl(),
    },

    {
      title: "Daftar Hari Ini",
      description: `Apa kamu tahu bahwa ${app.title} adalah sekolah yang tepat untuk keluarga Anda? Daftar sekarang juga!`,
      linkLabel: "Start of Complete your Application",
      linkHref: "",
      image:
        getRandomImageUrl(),
    },

    {
      title: "FAQs",
      description:
        "Punya pertanyaan? Pertanyaan Anda mungkin bisa dijawab di Pertanyaan yang Sering Diajukan.",
      linkLabel: "See our FAQs",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "School Fees",
      description: `A ${app.title} education prepares your child for endless possibility and experiences.`,
      linkLabel: "Learn More",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "School Fees",
      description: `A ${app.title} education prepares your child for endless possibility and experiences.`,
      linkLabel: "Learn More",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "School Fees",
      description: `A ${app.title} education prepares your child for endless possibility and experiences.`,
      linkLabel: "Learn More",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "School Fees",
      description: `A ${app.title} education prepares your child for endless possibility and experiences.`,
      linkLabel: "Learn More",
      linkHref: "",
      image: getRandomImageUrl(),
    },
  ],
};
