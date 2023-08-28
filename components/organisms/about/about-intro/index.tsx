"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { intro_dummies } from "@/dev/dummies/about";
import HomeSectionHeader from "@/components/molecules/section-header";
import PageParagraph from "@/components/atoms/page-paragraph";
import PageLink from "@/components/atoms/page-link";

interface Props {}

export default function AboutIntro(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 4,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    className: "tab-panel-slider",
  };

  return (
    <section>
      <Container>
        <div className="flex justify-end">
          <HomeSectionHeader
            title={intro_dummies.title}
            description={intro_dummies.description}
            linkLabel={intro_dummies.linkLabel}
            linkHref={intro_dummies.linkHref}
          />
        </div>

        <Slider {...settings}>
          {intro_dummies.body.map((item) => (
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
                    href={item.linkHref}
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

      <Container size="md" className="mt-20">
        <PageParagraph>
          Since we first opened our doors in 1951, we have had the privilege of
          educating thousands of students from all across the world. We have 70
          years of history learning, serving, and having fun in Jakarta.
        </PageParagraph>
        <PageLink href="#" className="mt-10">
          Read Our Story
        </PageLink>
      </Container>
    </section>
  );
}
