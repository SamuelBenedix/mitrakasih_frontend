import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import { app } from "@/config/app";
import { Slides } from "@/types/app";

export const _label: string = "About";

export const _pageTitle: string = `About ${app.title}`;

export const _pageDescription: string = `${app.title} is a diverse community of learners representing over 60 nationalities where every student is supported to achieve their very best.`;

export const _pageImage: string = getRandomImageUrl();

export const _about: string[] = [
  "We create, teach, and learn together across three garden-like campuses with leading-edge facilities that support independent inquiry, critical thinking, problem-solving, and collaborative study.",
  "We play sports, put on drama productions, paint, sculpt, engineer, and create. Our students are able to explore and grow in a safe environment and are encouraged to follow their passions to be as successful as they can be.",
  `The ${app.title} community is global and stretches well beyond thh school. As we always say, Once a Dragon, Always a Dragon!`,
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
    "Since we first opened our doors in 1951, we have had the privilege of educating thousands of students from all across the world. We have 70 years of history learning, serving, and having fun in Jakarta.",
  linkLabel: "Read Our Story",
  linkHref: "",
};

export const _membership = {
  title: "Accreditation & Memberships",
  description: `${app.title} is recognized by both the Indonesian government and several internationally certified accreditation bodies. As a legal entity, we are a yayasan (nonprofit organization) operating as a Satuan Pendidikan Kerjasama (SPK), or Joint Cooperation School.`,
  figures: [
    {
      title: "Leadership",
      description: `The leadership team at ${app.title} are educators first and foremost and lead the school in innovation and learning. With a principal and vice principal at each campus, we are able to make a large community feel small.`,
      linkLabel: "Meet Our Leadership Team",
      linkHref: "",
      image: getRandomImageUrl(),
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
