'use client';

import React, { createRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import './styles.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { _campusSlideshow } from '@/data/home';

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
      <div className="sm:mx-10 my-40 bg-primary-800 relative">
        <div className="absolute inset-x-0 bottom-5 sm:bottom-20  flex justify-center">
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

        <div className="pt-6 sm:pt-20 pb-28 sm:px-0">
          <Slider ref={slider} {...settings}>
            {_campusSlideshow.map((dummy) => (
              <div key={dummy.description} className="sm:h-[46rem]">
                <div className="sm:h-[36rem] max-w-6xl mx-auto slide-container relative">
                  <Image
                    src={dummy.image}
                    alt=""
                    width="600"
                    height="600"
                    className="object-cover sm:h-full w-full group-hover:scale-125 transition-all duration-1000 h-80"
                  />
                  <div className="slide-shadow absolute h-[90%] sm:h-auto sm:w-[90%] bg-gradient-to-b sm:bg-gradient-to-r from-black/80 to-transparent inset-x-0 sm:inset-y-0 top-0 sm:left-0" />
                  <div className="slide-description absolute inset-x-2 top-2 sm:top-10 sm:-left-28 max-w-lg">
                    <p className="font-medium text-2xl sm:text-3xl md:text-3xl xl:text-5xl text-white leading-tight">
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
