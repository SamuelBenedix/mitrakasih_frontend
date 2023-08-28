"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";
import Slider from "react-slick";
import HomeSectionHeader from "../../../molecules/section-header";
import { tab_panel_first_dummies } from "@/dev/dummies/home";

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
  };

  return (
    <section>
      <Container>
        <Tabs.Root defaultValue={tab_panel_first_dummies.tabs[0].label}>
          <Tabs.List className="space-x-6">
            {tab_panel_first_dummies.tabs.map((dummy) => (
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
            title={tab_panel_first_dummies.title}
            description={tab_panel_first_dummies.description}
            linkLabel={tab_panel_first_dummies.linkLabel}
            linkHref={tab_panel_first_dummies.linkHref}
          />

          <Container size="lg">
            {tab_panel_first_dummies.tabs.map((dummy) => (
              <Tabs.Content key={dummy.label} value={dummy.label}>
                <Slider {...settings}>
                  {dummy.body.map((item) => (
                    <figure
                      key={item.title}
                      className="relative group overflow-hidden"
                    >
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
              </Tabs.Content>
            ))}
          </Container>
        </Tabs.Root>
      </Container>
    </section>
  );
}
