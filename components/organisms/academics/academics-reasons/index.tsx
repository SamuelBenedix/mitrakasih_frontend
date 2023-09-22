"use client";

import React from "react";
import Container from "@/components/atoms/container";
import HomeSectionHeader from "@/components/molecules/section-header";
import { _intro } from "@/data/about";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface Props {}

export default function AcademicsReasons(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    className: "tab-panel-slider",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <section className="mt-32">
      <Container>
        <div className="flex justify-end">
          <HomeSectionHeader
            title="Reasons To Learn At Mitra Kasih"
            description="Mitra Kasih students learn how to be the best version of themselves and how to be best for the world they live in."
          />
        </div>

        <Slider {...settings}>
          {_intro.slides.map((item) => (
            <figure key={item.title} className="relative group overflow-hidden">
              <Image
                src={item.image}
                alt=""
                width="600"
                height="600"
                className="object-cover h-[28rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  {item.title}
                </h3>
                <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  <p className="mb-4">{item.description}</p>
                  <Link
                    href={item.linkHref || "#"}
                    className="font-medium flex space-x-2 items-center"
                  >
                    <span>{item.linkLabel}</span>
                    <IconArrowNarrowRight />
                  </Link>
                </div>
              </figcaption>
            </figure>
          ))}
        </Slider>
      </Container>
    </section>
  );
}
