"use client";

import React from "react";
import Container from "@/components/atoms/container";
import { cn } from "@/lib/utils/utils";
import { _communityVoices } from "@/data/home";
import HomeSectionHeader from "../../../molecules/section-header";
import Slider from "react-slick";
import Figure from "@/components/molecules/figure";

interface Props {}

export default function HomeCommunityVoices(props: Props) {
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
    <section className="mt-40">
      <Container size="md">
        <HomeSectionHeader
          title={_communityVoices.title}
          description={_communityVoices.description}
          linkLabel={_communityVoices.linkLabel}
          linkHref={_communityVoices.linkHref}
        />

        <div className="relative">
          <div
            className={cn(
              "absolute bg-blue-800 bottom-0 h-[8rem] w-[100rem] -translate-x-10 translate-y-10",
            )}
          />

          {/*<div className="relative max-w-8xl">*/}
          <Slider {...settings}>
            {_communityVoices.body.map((dummy) => (
              <Figure
                key={dummy.title}
                title={dummy.title}
                image={dummy.image}
                description={dummy.description}
              />
            ))}
          </Slider>
          {/*</div>*/}
        </div>
      </Container>
    </section>
  );
}
