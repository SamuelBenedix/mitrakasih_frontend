"use client";

import React from "react";
import Container from "@/components/atoms/container";
import * as Tabs from "@radix-ui/react-tabs";
import Slider from "react-slick";
import HomeSectionHeader from "../../../molecules/section-header";
import { _tabPanelFirst } from "@/data/home";
import Figure from "@/components/molecules/figure";

interface Props {}

export default function HomeTabPanelFirst(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 5,
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
        <Tabs.Root defaultValue={_tabPanelFirst.tabs[0].label}>
          <Tabs.List className="space-x-6">
            {_tabPanelFirst.tabs.map((dummy) => (
              <Tabs.Trigger
                key={dummy.label}
                value={dummy.label}
                className="pb-4 hover:text-primary-800 transition-all data-[state=active]:font-semibold data-[state=active]:text-primary-800 data-[state=active]:border-b-2 data-[state=active]:border-primary-800"
              >
                {dummy.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          <HomeSectionHeader
            title={_tabPanelFirst.title}
            description={_tabPanelFirst.description}
            linkLabel={_tabPanelFirst.linkLabel}
            linkHref={_tabPanelFirst.linkHref}
          />

          {/* <Container size="lg" noPadding>
            {_tabPanelFirst.tabs.map((dummy) => (
              <Tabs.Content key={dummy.label} value={dummy.label}>
                <Slider {...settings}>
                  {dummy.body.map((item) => (
                    <Figure
                      key={item.title}
                      title={item.title}
                      image={item.image}
                      linkLabel={item.linkLabel}
                      linkHref={item.linkHref}
                      description={item.description}
                    />
                  ))}
                </Slider>
              </Tabs.Content>
            ))}
          </Container> */}
        </Tabs.Root>
      </Container>
    </section>
  );
}
