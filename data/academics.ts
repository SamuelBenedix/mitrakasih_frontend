import { app } from "@/config/app";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { Figure, Slides } from "@/types/app";

export const _label: string = "Academics";

export const _pageTitle: string = `Academics`;

export const _pageDescription: string = `From Nursery Kindergarten to High School, ${app.title} offers a premier learning environment that is accredited by the Western Association of Schools and Colleges, and the Council of International Schools.`;

export const _pageImage: string = getRandomImageUrl();

export const _pageQuote: string =
  "From Nursery Kindergarten to High School, Mitra Kasih offers a premier learning environment that is accredited by the Western Association of Schools and Colleges, and the Council of International Schools.";

export const _about: string[] = [
  "The Mitra Kasih Nursery Kindergarten academic program is based on The Creative Curriculum® for preschool, a comprehensive early childhood educational system that has been shown to promote cognitive, physical social/emotional, and language development of children.",
  "Like Mitra Kasih as a whole, the Mitra Kasih Elementary School curriculum adopts programs which demonstrate the best international standards, practices and results for student learning. We place strong emphasis on language arts and mathematics. To ensure a balanced curriculum, we provide programs in science and technology, social studies, modern language, fine arts and physical development.",
  "The Mitra Kasih Middle School curriculum emphasizes research-based teaching and learning practices through age-appropriate intellectual, physical, cultural and social experiences. There are a variety of classes and opportunities for students that introduce them to new areas of learning where they can start to develop passions.",
  "Based on international standards, the Mitra Kasih High School academic program is designed to prepare students for a university that fits them best. It includes options to take the International Baccalaureate (IB) and Advanced Placement (AP) diploma/courses. The more options students have to find the right path for them, the more success they will have now and in the future.",
];

export const _academicFigures: Figure[] = [
  {
    title: "Nursery Kindergarten",
    image: getRandomImageUrl(),
    description: "Ages 3-6",
    linkLabel: "Find Out More",
    linkHref: "#",
  },
  {
    title: "Elementary School",
    image: getRandomImageUrl(),
    description: "Grades 1 to 5",
    linkLabel: "Find Out More",
    linkHref: "#",
  },
  {
    title: "Middle School",
    image: getRandomImageUrl(),
    description: "Grades 6 to 8",
    linkLabel: "Find Out More",
    linkHref: "#",
  },
  {
    title: "High School",
    image: getRandomImageUrl(),
    description: "Grades 9 to 12",
    linkLabel: "Find Out More",
    linkHref: "#",
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
      image: "https://www.mitrakasih.sch.id/images/DOKUMENTASI/SOCIAL/BAKSOS/DSC03406 (Large).JPG",
    },

    {
      title: "Say Hello! Inquire With Us Today",
      description: `Hubungi anggota Tim Admisi kami dan ambil langkah pertama untuk bergabung dengan ${app.title}!`,
      linkLabel: "Take the first step",
      linkHref: "",
      image:
        "https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-TAHUN AJARAN BARU 2023-2024/DSC09741 (Large).JPG",
    },

    {
      title: "Daftar Hari Ini",
      description: `Apa kamu tahu bahwa ${app.title} adalah sekolah yang tepat untuk keluarga Anda? Daftar sekarang juga!`,
      linkLabel: "Start of Complete your Application",
      linkHref: "",
      image:
        "https://www.mitrakasih.sch.id/images/DOKUMENTASI/FIRST DAY SCHOOL 2023-2024/MIDDLE _ HIGH/DSC09335 (Large).JPG",
    },

    {
      title: "FAQs",
      description:
        "Punya pertanyaan? Pertanyaan Anda mungkin bisa dijawab di Pertanyaan yang Sering Diajukan.",
      linkLabel: "See our FAQs",
      linkHref: "",
      image: "https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/DSC02022 (Large).JPG",
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
