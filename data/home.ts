
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { app } from "@/config/app";


export const _hero = [
  {
    title: "Tempat Kita Belajar",
    description: `Fasilitas di ${app.title} dirancang dengan satu tujuan: menciptakan lingkungan belajar yang terbaik bagi para siswa.`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: getRandomImageUrl(),
  },

  {
    title: "Learning is What We Do",
    description: `Di ${app.title}, kami mempersiapkan siswa-siswi dari seluruh dunia untuk menjadi yang terbaik dalam hal yang mereka cita-citakan dan pada saat yang sama, menjadi yang terbaik bagi dunia tempat mereka tinggal.`,
    // description: `At ${app.title}, we prepare students from across the globe to be the best in what they aspire for while being Best for the World they live in.`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: getRandomImageUrl(),
  },

  {
    title: "Best for the World",
    description: `We learn in Indonesia to be Best for the World. Find out how you can join the ${app.title} community today!`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: getRandomImageUrl(),
  },
];

export const _about = `Di ${app.title}, kami mempersiapkan siswa-siswi dari seluruh dunia untuk menjadi yang terbaik dalam hal yang mereka cita-citakan dan pada saat yang sama, menjadi yang terbaik bagi dunia tempat mereka tinggal.`

export const _tabPanelFirst = {
  title: "Tempat Kita Belajar",

  description: `Fasilitas di ${app.title} dirancang dengan satu tujuan: menciptakan lingkungan belajar yang terbaik bagi para siswa.`,

  linkLabel: "Learn More",

  linkHref: "#",

  tabs: [
    {
      label: "Admissions",
      body: [
        {
          title: `Kunjungi ${app.title}`,
          description:
            "Cara terbaik untuk mengenal sekolah kami adalah dengan mengalaminya sendiri! Jadwalkan kunjungan dengan Kantor Penerimaan Siswa Baru kami hari ini.",
          linkLabel: "Jadwalkan kunjungan Hari Ini",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: "Tanyakan Kepada Kami Hari Ini",
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
      ],
    },


    {
      label: "Academics",
      body: [
        {
          title: "Nursery Kindergarten",
          description: `It's never too early for students to begin exploring their interests and develop a love for learning. The ${app.title} Nursery Kindergarten program, for students ages 3-6, is the perfect place to start.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: "Elementary School",
          description: `The ${app.title} Elemntary School program (Grades 1-5) immerses children in an atmosphere of care, exploration, and growth while they are introduced to the wonders of mathematics, reading, and writing.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: "Middle School",
          description: `Students in the ${app.title} Middle School (Grades 6-8) begin to build powerful connections between theri learning and real life. They are encouraged to explore new interests and develop new passions.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: "High School",
          description: `As one of the few schools that offer both the International Baccalaurate (IB) and Advances Placement (AP) diploma/courses, the ${app.title} High School (Grades 9-12) program is centered on choice and supporting students to achive their very best.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: `${app.title} Learning Center`,
          description: `As an extension of our current Student Support Service, the ${app.title} Learning Center provides additional support for students with moderate to significant learning needs and global developmental delays.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: `${app.title} Studio`,
          description: `Middle School students have the chance to engage in an experiential learning pathway that focuses on teamwork and problem solving through longterm projects called ${app.title} Studio.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },

        {
          title: "IB And AP",
          description:
            "We offer three outstanding internationally recognized programs of study: the International Baccalaureate (IB) Diploma Programme, the IB Career-related Prgramme, and the College Board's Advanced Placement (AP) Program.",
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },
      ],
    },
  ],
};

export const _campusSlideshow = [
  {
    description: "Di Sekolah Mitra Kasih, siswa ditantang untuk menjadi reflektif dan kreatif",
    image: getRandomImageUrl(),
  },
  {
    description:
      "Memiliki pengalaman yang menanamkan ketangguhan dan sumber daya",
    image: getRandomImageUrl(),
  },
  {
    description:
      "Sambil berhubungan dengan masyarakat dan komunitas di sekitar mereka seiring dengan pertumbuhan mereka",
    image: getRandomImageUrl(),
  },
  {
    description:
      "Menjadi pembelajar sepanjang hayat, pemimpin, dan yang terbaik bagi dunia yang mereka tinggali",
    image: getRandomImageUrl(),
  },
];

export const _tabPanelSecond = {
  title: `Kehidupan di ${app.title}`,

  description:
    `Siswa-siswi di ${app.title} senang belajar, bersenang-senang, dan menemukan minat baru di sekolah kami yang indah, luas, dan canggih.`,

  linkLabel: "Learn More",

  linkHref: "#",

  tabs: [
    {
      label: "Fast Facts",
      body: [
        {
          title: "Hectares",
          number: "20",
          description: ``,
          linkLabel: "See our campus",
          linkHref: "",
          image: getRandomImageUrl(),
        },
        {
          title: "Founded",
          number: "1951",
          description: ``,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },
        {
          title: "Students",
          number: "2000+",
          description:
            ``,
          linkLabel: `Learn More About ${app.title}`,
          linkHref: "",
          image: getRandomImageUrl(),
        },
        {
          title: "Clubs and Activities",
          number: "300+",
          description: ``,
          linkLabel: "Learn More",
          linkHref: "",
          image: getRandomImageUrl(),
        },
      ],
    },
  ],
};

export const _communityVoices = {
  title: "Suara Komunitas",

  description: `${app.title} adalah komunitas yang beragam yang tidak hanya terdiri dari siswa, staf pengajar, dan staf, tetapi juga orang tua dan alumni. Dengarkan apa yang dikatakan oleh komunitas kami tentang pengalaman mereka di ${app.title}.`,

  linkLabel: `Pelajari lebih lanjut tentang Komunitas ${app.title}`,

  linkHref: "#",

  body: [
    {
      title: "Nursery Kindergarten Student",
      description: ``,
      image: getRandomImageUrl(),
    },
    {
      title: "Elementary School Student",
      description: ``,
      image: getRandomImageUrl(),
    },

    {
      title: "Middle School Students",
      description: ``,
      image: getRandomImageUrl(),
    },

    {
      title: "High School Student",
      description:
        ``,
      image: getRandomImageUrl(),
    },
  ],
};
