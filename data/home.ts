
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { app } from "@/config/app";


export const _hero = [
  {
    title: "Tempat Kita Belajar",
    description: `Fasilitas di ${app.title} dirancang dengan satu tujuan: menciptakan lingkungan belajar yang terbaik bagi para siswa.`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: 'https://www.mitrakasih.sch.id/images/buildings/P/DSC02138 (Small).JPG',
  },

  {
    title: "Learning is What We Do",
    description: `Di ${app.title}, kami mempersiapkan siswa-siswi dari seluruh dunia untuk menjadi yang terbaik dalam hal yang mereka cita-citakan dan pada saat yang sama, menjadi yang terbaik bagi dunia tempat mereka tinggal.`,
    // description: `At ${app.title}, we prepare students from across the globe to be the best in what they aspire for while being Best for the World they live in.`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 DIKELAS/PRIMARY/WhatsApp Image 2023-05-29 at 08.17.51.jpeg',
  },

  {
    title: "Best for the World",
    description: `We learn in Indonesia to be Best for the World. Find out how you can join the ${app.title} community today!`,
    linkLabel: "Learn More",
    linkHref: "#",
    image: 'https://www.mitrakasih.sch.id/images/buildings/MH/MIDDLE (Large).jpg',
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
          image: 'https://www.mitrakasih.sch.id/images/buildings/MH/DSC01867 (Large).JPG',
        },

        {
          title: "Tanyakan Kepada Kami Hari Ini",
          description: `Speak with a member of our Admissions Office and take the first step to joining ${app.title}!`,
          linkLabel: "Take the first step",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/IMG-20230607-WA0046 (Large).jpg',
        },

        {
          title: "Apply Today",
          description: `Do you already know that ${app.title} is the right school for your family? Apply today!`,
          linkLabel: "Start of Complete your Application",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/IMG-20230609-WA0122 (Large).jpg',
        },

        {
          title: "FAQs",
          description:
            "Do you have a question? It might be answered in our Frequently Asked Questions.",
          linkLabel: "See our FAQs",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/DSC02022 (Large).JPG',
        },

        {
          title: "School Fees",
          description: `A ${app.title} education prepares your child for endless possibility and experiences.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/DSC02036 (Large).JPG',
        },
      ],
    },

    // {
    //   label: "Campuses",
    //   body: [
    //     {
    //       title: "Pattimura Elementary School",
    //       description:
    //         "Take a virtual 360° tour of our first and original campus Pattimura, located in the South Jakarta neighborhood of Kebayoran Baru.",
    //       linkLabel: "Take a 360° Virtual Tour Today",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: "Pondok Indah Elemntary School",
    //       description:
    //         "Take a virtual 360° tour of our beautiful Pondok Indah Elementary located in Pondok Indah in South Jakarta.",
    //       linkLabel: "Take a 360° Virtual Tour Today",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: "Middle School Cilandak",
    //       description:
    //         "Take a virtual 360° tour of our state-of=the-art Middle School campus located in the Cilandak neighborhood of South Jakarta.",
    //       linkLabel: "Take a 360° Virtual Tour Today",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: "High School Cilandak",
    //       description:
    //         "Take a virtual 360° tour of the incredible High School campus located in the Cilandak neighborhood of South Jakarta.",
    //       linkLabel: "Take a 360° Virtual Tour Today",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },
    //   ],
    // },

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

    // {
    //   label: "Service",
    //   body: [
    //     {
    //       title: "Service Learning",
    //       description:
    //         "Service learning and dedication to being stewards of the environment is built into the curriculum for all of our students from Nursery Kindergarten to High School.",
    //       linkLabel: "Learn More",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: "Service Clubs",
    //       description: `A highlight for many ${app.title} students is their participation in one of the many service clubs that are available.`,
    //       linkLabel: "Learn More",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: "Service Partners",
    //       description: `${app.title} is only one part of he incredible community in Jakarta that is dedicated to service. We partner with several organizations to help create positive change.`,
    //       linkLabel: "Learn More",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },

    //     {
    //       title: `${app.title} Peduli`,
    //       description: `${app.title} Peduli is the service arm of ${app.title} School. It helps to support and fund service projects developed by students and ${app.title} service initiatives.`,
    //       linkLabel: "Learn More",
    //       linkHref: "",
    //       image: getRandomImageUrl(),
    //     },
    //   ],
    // },
  ],
};

export const _campusSlideshow = [
  {
    description: "Di Sekolah Mitra Kasih, siswa ditantang untuk menjadi reflektif dan kreatif",
    image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/MIIDLE HIGH/IMG-20230607-WA0025 (Large).jpg',
  },
  {
    description:
      "Memiliki pengalaman yang menanamkan ketangguhan dan sumber daya",
    image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FUNWEEK/PRIMARY/WhatsApp Image 2023-06-13 at 11.48.06.jpeg',
  },
  {
    description:
      "Sambil berhubungan dengan masyarakat dan komunitas di sekitar mereka seiring dengan pertumbuhan mereka",
    image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/03 ADIWIYATA/cfe62997-a200-404a-8b25-ad65779ad93b.jpg',
  },
  {
    description:
      "Menjadi pembelajar sepanjang hayat, pemimpin, dan yang terbaik bagi dunia yang mereka tinggali",
    image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-17 AGUSTUS 2023/DSC03518 (Large).JPG',
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
          description: `${app.title} has four schools across three lush, open campus in South Jakarta. There is plenty of outdoor space on campus for ${app.title} students to learn!`,
          linkLabel: "See our campus",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/buildings/MH/MIDDLE (Large).jpg',
        },
        {
          title: "Founded",
          number: "1951",
          description: `For over 70 years ${app.title} has been delivering a high-quality international education to students in South Jakarta.`,
          linkLabel: "Learn More",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-TAHUN AJARAN BARU 2023-2024/DSC09596 (Large).JPG',
        },
        {
          title: "Students",
          number: "2000+",
          description:
            `With students representing over 60 different nationalities, ${app.title} is truly an internaitonal school.`,
          linkLabel: `Learn More About ${app.title}`,
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/FIRST DAY SCHOOL 2023-2024/MIDDLE _ HIGH/DSC09335 (Large).JPG',
        },
        {
          title: "Clubs and Activities",
          number: "300+",
          description: `Students from Elementary School to High School have hundreds of clubs and activities to choose from when shapng their ${app.title} experience`,
          linkLabel: "Learn More",
          linkHref: "",
          image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 EXCURR/dance/IMG_1087 (Large).JPG',
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
      description: `Apa yang akan Anda ceritakan kepada orang lain tentang komunitas Mitra Kasih??`,
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 DIKELAS/NK/IMG20230529114927 (Large).jpg',
    },
    {
      title: "Elementary School Student",
      description: `Apa yang akan Anda sampaikan kepada siswa baru yang bergabung dengan Mitra Kasih? ${app.title}?`,
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 DIKELAS/PRIMARY/WhatsApp Image 2023-05-29 at 08.17.51.jpeg',
    },

    {
      title: "Middle School Students",
      description: `What was your first day of school at ${app.title} like?`,
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 DIKELAS/MIDDLE/IMG-20220607-WA0024.jpg',
    },

    {
      title: "High School Student",
      description:
        `What does ${app.title}'s mission to be Best for the World mean to you?`,
      image: 'https://www.mitrakasih.sch.id/images/DOKUMENTASI/01 DIKELAS/HIGH/IMG-20220607-WA0022.jpg',
    },
  ],
};
