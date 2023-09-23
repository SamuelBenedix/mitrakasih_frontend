"use client";

import React from "react";
import Container from "@/components/atoms/container";
import HomeSectionHeader from "@/components/molecules/section-header";
import Slider from "react-slick";
import { _reasons } from "@/data/academics";
import Figure from "@/components/molecules/figure";

interface Props {}

export default function AcademicsReasons(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 4.2,
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
            title={_reasons.title}
            description={_reasons.description}
          />
        </div>

        <Slider {...settings}>
          {_reasons.slides.map((_item, key) => (
            <Figure
              key={key}
              title={_item.title}
              image={_item.image}
              linkLabel={_item.linkLabel}
              linkHref={_item.linkHref}
              description={_item.description}
            />
          ))}
        </Slider>
      </Container>
    </section>
  );
}
