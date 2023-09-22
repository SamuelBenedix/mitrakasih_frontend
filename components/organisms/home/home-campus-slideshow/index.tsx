"use client";

import React, { createRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "./styles.css";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { campus_slideshow_dummies } from "@/dev/dummies/home";

interface Props {}

export default function HomeCampusSlideshow(props: Props) {
  const {} = props;

  const slider = createRef<Slider>();

  const next = () => {
    slider.current?.slickNext();
  };

  const prev = () => {
    slider.current?.slickPrev();
  };

  const settings = {
    speed: 700,
    slidesToShow: 1,
    infinite: false,
    centerMode: true,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section>
      <div className="md:mx-10 my-40 bg-primary-800 relative">
        <div className="absolute inset-x-0 bottom-10 md:bottom-32 flex justify-center">
          <div className="space-x-8 z-10">
            <button
              onClick={prev}
              className="rounded-full border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
            >
              <IconChevronLeft size={32} />
            </button>
            <button
              onClick={next}
              className="rounded-full border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
            >
              <IconChevronRight size={32} />
            </button>
          </div>
        </div>

        <div className="pt-6 md:pt-20 pb-28 md:px-0">
          <Slider ref={slider} {...settings}>
            {campus_slideshow_dummies.map((dummy) => (
              <div key={dummy.description} className="md:h-[46rem]">
                <div className="md:h-[36rem] max-w-6xl mx-auto slide-container relative">
                  <Image
                    src={dummy.image}
                    alt=""
                    width="600"
                    height="600"
                    className="object-cover h-full w-full group-hover:scale-125 transition-all duration-1000"
                  />
                  <div className="slide-shadow absolute h-[90%] md:h-auto md:w-[90%] bg-gradient-to-b md:bg-gradient-to-r from-black/60 to-transparent inset-x-0 md:inset-y-0 top-0 md:left-0" />
                  <div className="slide-description absolute inset-x-2 top-2 md:top-10 md:-left-28 max-w-lg">
                    <p className="font-medium text-2xl md:text-5xl text-white leading-tight">
                      {dummy.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
