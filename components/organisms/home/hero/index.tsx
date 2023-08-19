"use client";

import React, { createRef } from "react";
import Image from "next/image";
import { app } from "@/config/app";
import { cn } from "@/lib/utils";
import Navigation from "@/components/molecules/navigation";
import SectionHeader from "@/components/molecules/section-header";
import Slider from "react-slick";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import "./styles.css";

interface Props {}

export default function HomeHero(props: Props) {
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
    infinite: true,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <section>
      <header>
        <div
          className={cn(
            "flex h-[8rem] flex-row justify-between items-end px-10 absolute inset-x-0 top-0 text-white",
          )}
        >
          <div className="z-10">
            <Image
              src={app.images.logo}
              alt={app.title}
              width={100}
              height={100}
            />
          </div>
          <div className="mb-4 flex">
            {app.navigations.map((navigation) => (
              <Navigation
                key={navigation.label}
                link={navigation}
                color="white"
              />
            ))}
          </div>
        </div>
      </header>

      <button
        onClick={prev}
        className="rounded-full absolute left-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="rounded-full absolute right-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronRight size={32} />
      </button>

      <Slider ref={slider} {...settings}>
        <figure className="relative">
          <div className="w-full h-screen">
            <Image
              src="https://source.unsplash.com/random/2000x2000"
              alt={app.title}
              // FIXME Benerin
              width={2000}
              height={2000}
              className="object-cover w-full h-full slide-image"
            />
          </div>

          <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[90%] bottom-0 inset-x-0" />
          <figcaption className="absolute bottom-0 inset-x-0 md:mx-40 slide-section-header">
            <SectionHeader
              title="Inquire to Learn More"
              description="Take the first step to joining our community today."
              linkLabel="Inquire Now"
              linkHref="#"
              color="white"
            />
          </figcaption>
        </figure>
        <figure className="relative">
          <div className="w-full h-screen">
            <Image
              src="https://source.unsplash.com/random/2000x2000"
              alt={app.title}
              // FIXME Benerin
              width={2000}
              height={2000}
              className="object-cover w-full h-full slide-image"
            />
          </div>

          <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[90%] bottom-0 inset-x-0" />
          <figcaption className="absolute bottom-0 inset-x-0 md:mx-40 slide-section-header">
            <SectionHeader
              title="Who are you?"
              description="I'm human, kidding, i'm actually alien from Proxima."
              linkLabel="Inquire Now"
              linkHref="#"
              color="white"
            />
          </figcaption>
        </figure>
        <figure className="relative">
          <div className="w-full h-screen">
            <Image
              src="https://source.unsplash.com/random/2000x2000"
              alt={app.title}
              // FIXME Benerin
              width={2000}
              height={2000}
              className="object-cover w-full h-full slide-image"
            />
          </div>

          <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[90%] bottom-0 inset-x-0" />
          <figcaption className="absolute bottom-0 inset-x-0 md:mx-40 slide-section-header">
            <SectionHeader
              title="Inquire to Learn More"
              description="Take the first step to joining our community today."
              linkLabel="Inquire Now"
              linkHref="#"
              color="white"
            />
          </figcaption>
        </figure>
      </Slider>
    </section>
  );
}
