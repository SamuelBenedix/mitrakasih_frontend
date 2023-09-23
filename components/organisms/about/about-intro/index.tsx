"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Slider from "react-slick";
import { intro_dummies } from "@/dev/dummies/about";
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
  };
  const manyYears = new Date().getFullYear() - 2012;

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
        Sejak pertama kali kami membuka pintu kami pada tahun 2012, kami memiliki pengalaman {manyYears} tahun dalam mendidik siswa untuk siap dalam menghadapi cepatnya perkembangan dunia.
        </Paragraph>

        <CommonLink href="#" className="mt-10">
          Read Our Story
        </CommonLink>
      </Container>
    </section>
  );
}
