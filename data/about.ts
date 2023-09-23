import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { app } from "@/config/app";
import { Slides } from "@/types/app";

const manyYears = new Date().getFullYear() - 2012;

export const _label: string = "About";

export const _pageTitle: string = `Tentang ${app.title}`;

export const _pageDescription: string = `${app.title} adalah sekolah yang mempersiapkan siswa untuk meraih prestasi maksimal dalam dunia pendidikan yang kompetitif.`;

export const _pageImage: string = '/images/Foto Gedung/P/DSC02134 (Large).JPG';

export const _about: string[] = [
  "Sekolah Mitra Kasih adalah lembaga pendidikan yang berkomitmen untuk memberikan standar pendidikan internasional yang tinggi dengan menghadirkan tenaga pengajar terbaik. Kami didedikasikan untuk memberikan kualitas pendidikan terbaik kepada setiap siswa kami, dengan tujuan membekali mereka untuk menghadapi perkembangan dunia yang cepat.",
  "Kami percaya bahwa setiap siswa adalah individu yang unik dan berharga yang memiliki potensi untuk mencapai yang terbaik.",
  `Kami berkomitmen untuk menciptakan lingkungan pendidikan yang mendukung perkembangan siswa secara holistik, sehingga mereka dapat menjadi pemimpin masa depan yang siap menghadapi tantangan global. Dengan semangat ini, kami menyambut semua siswa untuk bergabung dengan kami dalam perjalanan pendidikan yang inspiratif.`,
];

export const _intro: Slides = {
  title: "What Does It Mean To Be Best For The World?",

  description:
    "Our mission is to “learn in Indonesia to be Best for the World.” It means we emphasize creating positive change in our community, wherever we are.",

  linkLabel: "Learn More",

  linkHref: "#",

  slides: [
    {
      title: "Community of Care",
      description:
        "The best way to learn about our school is to experience it for yourself! Schedule a tour with our Admissions Office today.",
      linkLabel: "Schedule a Tour Today",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "Say Hello! Inquire With Us Today",
      description: `Speak with a member of our Admissions Office and take the first step to joining ${app.title}!`,
      linkLabel: "Take the first step",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "Apply Today",
      description: `Do you already know that ${app.title} is the right school for your family? Apply today!`,
      linkLabel: "Start of Complete your Application",
      linkHref: "",
      image: getRandomImageUrl(),
    },

    {
      title: "FAQs",
      description:
        "Do you have a question? It might be answered in our Frequently Asked Questions.",
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

export const _introStory = {
  paragraph:
    `Sejak pertama kali kami membuka pintu kami pada tahun 2012, kami memiliki pengalaman ${manyYears} tahun dalam mendidik siswa untuk siap dalam menghadapi cepatnya perkembangan dunia.`,
  linkLabel: "Read Our Story",
  linkHref: "",
};

export const _membership = {
  title: "Accreditation & Memberships",
  description: `${app.title} is recognized by both the Indonesian government and several internationally certified accreditation bodies. As a legal entity, we are a yayasan (nonprofit organization) operating as a Satuan Pendidikan Kerjasama (SPK), or Joint Cooperation School.`,
  figures: [
    {
      title: "Leadership",
      description: `Tim kepemimpinan di ${app.title} adalah para pendidik yang terbaik dan terutama dalam memimpin sekolah, berinovasi dan mengajar. Dengan kepala sekolah dan wakil kepala sekolah di setiap sekolah, kami mampu membuat komunitas yang besar terasa kecil.`,
      linkLabel: "Meet Our Leadership Team",
      linkHref: "",
      image: '/images/DOKUMENTASI/UPACARA/UPACARA-17 AGUSTUS 2023/DSC03518 (Large).JPG',
    },
    {
      title: "Apple Distinguished School",
      description:
        "We are pleased to have been recognized as an Apple distinguished school for the last 10 years. Our Apple one-to-one program allows students to personalize and creatively express their learning.",
      linkLabel: "Read More",
      linkHref: "",
      image: getRandomImageUrl(),
    },
  ],
};
