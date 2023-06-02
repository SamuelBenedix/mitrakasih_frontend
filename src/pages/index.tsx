import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import { BsArrowRightShort } from "react-icons/bs";
import Head from "next/head";
import Link from "next/link";
import {
  announcement_dummies,
  facility_dummies,
  gallery_dummies,
  news_dummies,
} from "@/lib/dummies";
import Carousel from "@/components/Carousel/Carousel";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Head>
        <title>Mitra Kasih</title>
      </Head>

      {/* HERO SECTION */}
      <section
        id="hero-section"
        className="relative flex h-[800px] flex-col justify-end bg-hero-image bg-cover px-container-2xl pb-40"
      >
        <h1 className="z-10 text-6xl font-bold uppercase text-white">
          Mitra Kasih School
        </h1>
        <p
          className="z-10 text-xl text-white
        "
        >
          Perumahan Citraland Jl. Jend. Achmad Yani km. 7,8
        </p>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-b from-transparent to-black/50"></div>
      </section>

      {/* NEWS SECTION */}
      <Section id="news-section" className="mx-container-2xl mt-20">
        <Section.Title value="Berita Terkini" className="mb-8 text-center" />
        <div className="flex justify-center space-x-8">
          {news_dummies.map((news) => (
            <Card key={news.id}>
              <Card.Image src={news.image} alt="" />
              <Card.Body className="flex h-[200px] flex-col justify-between">
                <div>
                  <Card.Title value={news.title} />
                  <Card.Description value={news.excerpt} />
                </div>
                <div className="mt-4 flex justify-between">
                  <p className="text-sm text-gray-600">
                    {news.created_at.toLocaleDateString("id-ID")}
                  </p>
                  <Link
                    href={news.path}
                    className="flex items-center text-sm font-medium text-blue-800 "
                  >
                    Selengkapnya <BsArrowRightShort className="ml-1" />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="#" className="button--primary">
            Lihat selengkapnya
          </Link>
        </div>
      </Section>

      {/* FACILITIES SECTION */}
      <Section id="facilities-section" className="mx-container-2xl mt-20">
        <Section.Title value="Fasilitas Kami" className="mb-8 text-center" />
        <div className="mx-auto grid max-w-3xl grid-cols-3 gap-10">
          {facility_dummies.map((facility) => (
            <div
              key={facility.id}
              className="flex flex-col items-center justify-center rounded-lg bg-blue-800 p-10"
            >
              <facility.image className="h-24 w-full text-white" />
              <p className="mt-2 text-center text-xl font-semibold text-white">
                {facility.name}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ANNOUNCEMENTS SECTION */}
      <Section id="announcements-section" className="mx-container-2xl mt-20">
        <div className="mb-8 flex items-center justify-between">
          <Section.Title value="Pengumuman" />
          <Link href="#" className="button--primary">
            Lihat selengkapnya
          </Link>
        </div>
        <Carousel>
          {announcement_dummies.map((news) => (
            <Card key={news.id} className="mx-4">
              <Card.Image src={news.image} alt="" />
              <Card.Body>
                <Card.Title value={news.title} className="truncate" />
                <div className="mt-4 flex justify-between">
                  <p className="text-sm text-gray-600">
                    {news.created_at.toLocaleDateString("id-ID")}
                  </p>
                  <Link
                    href={news.path}
                    className="flex items-center text-sm font-medium text-blue-800 "
                  >
                    Selengkapnya <BsArrowRightShort className="ml-1" />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </Section>

      {/* GALLERY SECTION */}
      <Section id="gallery-section" className="mx-container-2xl mt-20">
        <div className="mb-8 flex items-center justify-between">
          <Section.Title value="Gallery" />
          <Link href="#" className="button--primary">
            Lihat selengkapnya
          </Link>
        </div>
        <Carousel>
          {gallery_dummies.map((news) => (
            <Card key={news.id} className="mx-4">
              <Card.Image src={news.image} alt="" />
              <Card.Body>
                <Card.Title value={news.title} className="truncate" />
                <div className="mt-4 flex justify-between">
                  <p className="text-sm text-gray-600">
                    {news.created_at.toLocaleDateString("id-ID")}
                  </p>
                  <Link
                    href={news.path}
                    className="flex items-center text-sm font-medium text-blue-800 "
                  >
                    Selengkapnya <BsArrowRightShort className="ml-1" />
                  </Link>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Carousel>
      </Section>
    </>
  );
}
