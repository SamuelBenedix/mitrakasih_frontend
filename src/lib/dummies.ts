import { Announcement } from "@/types/announcement";
import { Facility } from "@/types/facility";
import { Gallery } from "@/types/gallery";
import { News } from "@/types/news";
import {
  FaSwimmer,
  FaAmbulance,
  FaChurch,
  FaCalendarAlt,
  FaLightbulb,
  FaBookOpen,
} from "react-icons/fa";

export const news_dummies: News[] = [
  {
    id: 0,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    excerpt:
      "Menggelar upacara peringatan hari lahir Pancasila. Upacara yang diikuti oleh pimpinan, berlangsung secara hybird...",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 1,
    title: "Highschool Graduation First Gen",
    excerpt:
      "Menggelar upacara peringatan hari lahir Pancasila. Upacara yang diikuti oleh pimpinan, berlangsung secara hybird...",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 2,
    title: "Kindergrater Graduation",
    excerpt:
      "Menggelar upacara peringatan hari lahir Pancasila. Upacara yang diikuti oleh pimpinan, berlangsung secara hybird...",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
];

export const facility_dummies: Facility[] = [
  {
    id: 0,
    name: "Kolam Renang",
    image: FaSwimmer,
  },
  {
    id: 1,
    name: "Rumah Sakit",
    image: FaAmbulance,
  },
  {
    id: 2,
    name: "Tempat Ibadah",
    image: FaChurch,
  },
  {
    id: 3,
    name: "Kalender Akademik",
    image: FaCalendarAlt,
  },
  {
    id: 4,
    name: "Pembelajaran Entrepreneurship",
    image: FaLightbulb,
  },
  {
    id: 5,
    name: "Perpustakaan",
    image: FaBookOpen,
  },
];

export const announcement_dummies: Announcement[] = [
  {
    id: 0,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 1,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 2,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 3,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 4,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 5,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
];

export const gallery_dummies: Gallery[] = [
  {
    id: 0,
    title: "Hello World",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 1,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 2,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 3,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
  {
    id: 4,
    title: "Semangat Untuk Bangkit: Gelar Upacara Harkitnas",
    image: "/images/school.png",
    path: "#",
    created_at: new Date("2023-06-01"),
  },
];
