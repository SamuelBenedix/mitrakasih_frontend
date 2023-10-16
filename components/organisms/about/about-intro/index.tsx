"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Slider from "react-slick";
import { _intro, _introStory } from "@/data/about";
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
            title={_intro.title}
            description={_intro.description}
            linkLabel={_intro.linkLabel}
            linkHref={_intro.linkHref}
          />
        </div>

        <Slider {...settings}>
          {_intro.slides.map((_item) => (
            <Figure
              key={_item.title}
              title={_item.title}
              image={_item.image}
              description={_item.description}
              linkLabel={_item.linkLabel}
              linkHref={_item.linkHref}
            />
          ))}
        </Slider>
      </Container>

      <Container size="md" className="mt-20">
        <Paragraph>{_introStory.paragraph}</Paragraph>

        {/* <CommonLink href={_introStory.linkHref} className="mt-10">
          {_introStory.linkLabel}
        </CommonLink> */}
      </Container>
    </section>
  );
}
