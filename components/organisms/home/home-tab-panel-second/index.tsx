"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils/utils";
import {
  tab_panel_first_dummies,
  tab_panel_second_dummies,
} from "@/dev/dummies/home";
import * as Tabs from "@radix-ui/react-tabs";
import HomeSectionHeader from "../../../molecules/section-header";
import Slider from "react-slick";
import Figure from "@/components/molecules/figure";

interface Props {}

export default function HomeTabPanelSecond(props: Props) {
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
        <Tabs.Root defaultValue={tab_panel_second_dummies.tabs[0].label}>
          <Tabs.List className="space-x-6">
            {tab_panel_second_dummies.tabs.map((dummy) => (
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
            title={tab_panel_second_dummies.title}
            description={tab_panel_second_dummies.description}
            linkLabel={tab_panel_second_dummies.linkLabel}
            linkHref={tab_panel_second_dummies.linkHref}
          />

          <Container size="lg">
            <div className="relative">
              <div
                className={cn(
                  styles.background,
                  "absolute bg-blue-800 inset-0 w-[400rem] -translate-x-10 -translate-y-10",
                )}
              />

              {tab_panel_second_dummies.tabs.map((dummy) => (
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
                        numberValue={item.number}
                      />
                    ))}
                  </Slider>
                </Tabs.Content>
              ))}
            </div>
          </Container>
        </Tabs.Root>
      </Container>
    </section>
  );
}
