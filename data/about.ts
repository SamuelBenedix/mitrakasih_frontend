import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { app } from "@/config/app";
import { Slides } from "@/types/app";

const manyYears = new Date().getFullYear() - 2012;

export const _label: string = "About";

export const _pageTitle: string = `Tentang ${app.title}`;

export const _pageDescription: string = `${app.title} adalah sekolah yang mempersiapkan siswa untuk meraih prestasi maksimal dalam dunia pendidikan yang kompetitif.`;

export const _pageImage: string = 'https://www.mitrakasih.sch.id/images/buildings/P/DSC02134 (Large).JPG';

export const _about: string[] = [
  app.description,
  "Kami percaya bahwa setiap siswa adalah individu yang unik dan berharga yang memiliki potensi untuk mencapai yang terbaik.",
  `Kami berkomitmen untuk menciptakan lingkungan pendidikan yang mendukung perkembangan siswa secara holistik, sehingga mereka dapat menjadi pemimpin masa depan yang siap menghadapi tantangan global. Dengan semangat ini, kami menyambut semua siswa untuk bergabung dengan kami dalam perjalanan pendidikan yang inspiratif.`,
];

export const _intro: Slides = {
  title: "Apa Artinya Menjadi yang Terbaik Bagi Dunia?",

  description:
    "Misi kami adalah \"belajar di Indonesia untuk menjadi yang terbaik bagi dunia\". Ini berarti kami menekankan untuk menciptakan perubahan positif di masyarakat, di mana pun kami berada.",

  linkLabel: "Learn More",

  linkHref: "#",

  slides: [
    {
      title: "Komunitas Kepedulian",
      description:
        "Cara terbaik untuk mempelajari sekolah kami adalah dengan mengalaminya sendiri!",
      linkLabel: "Schedule a Tour Today",
      linkHref: "",
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/SOCIAL/BAKSOS/DSC03406 (Large).JPG',
    },

    {
      title: "Say Hello! Inquire With Us Today",
      description: `Hubungi anggota Tim Admisi kami dan ambil langkah pertama untuk bergabung dengan ${app.title}!`,
      linkLabel: "Take the first step",
      linkHref: "",
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-TAHUN AJARAN BARU 2023-2024/DSC09741 (Large).JPG',
    },

    {
      title: "Daftar Hari Ini",
      description: `Apa kamu tahu bahwa ${app.title} adalah sekolah yang tepat untuk keluarga Anda? Daftar sekarang juga!`,
      linkLabel: "Start of Complete your Application",
      linkHref: "",
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FIRST DAY SCHOOL 2023-2024/MIDDLE _ HIGH/DSC09335 (Large).JPG',
    },

    {
      title: "FAQs",
      description:
        "Punya pertanyaan? Pertanyaan Anda mungkin bisa dijawab di Pertanyaan yang Sering Diajukan.",
      linkLabel: "See our FAQs",
      linkHref: "",
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/DSC02022 (Large).JPG',
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
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-17 AGUSTUS 2023/DSC03518 (Large).JPG',
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
