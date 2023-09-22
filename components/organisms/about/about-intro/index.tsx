"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Slider from "react-slick";
import { _aboutIntro } from "@/data/about";
import HomeSectionHeader from "@/components/molecules/section-header";
import Figure from "@/components/molecules/figure";
import Paragraph from "@/components/atoms/paragraph";
import CommonLink from "@/components/atoms/common-link";

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
    <section>
      <Container>
        <div className="flex justify-end">
          <HomeSectionHeader
            title={_aboutIntro.title}
            description={_aboutIntro.description}
            linkLabel={_aboutIntro.linkLabel}
            linkHref={_aboutIntro.linkHref}
          />
        </div>

        <Slider {...settings}>
          {_aboutIntro.body.map((item) => (
            <Figure
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
              linkLabel={item.linkLabel}
              linkHref={item.linkHref}
            />
          ))}
        </Slider>
      </Container>

      <Container size="md" className="mt-20">
        <Paragraph>
          Since we first opened our doors in 1951, we have had the privilege of
          educating thousands of students from all across the world. We have 70
          years of history learning, serving, and having fun in Jakarta.
        </Paragraph>

        <CommonLink href="#" className="mt-10">
          Read Our Story
        </CommonLink>
      </Container>
    </section>
  );
}
