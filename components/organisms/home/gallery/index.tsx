"use client";

import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import SectionHeader from "@/components/molecules/section-header";
import * as Tabs from "@radix-ui/react-tabs";
import { content } from "@/config/content";
import Slider from "react-slick";
import "./styles.css";

interface Props {}

export default function HomeGallery(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <Container>
        <Tabs.Root defaultValue={content.getToKnowJis[0].title}>
          <Tabs.List className="space-x-6">
            {content.getToKnowJis.map((value) => (
              <Tabs.Trigger
                key={value.title}
                value={value.title}
                className="pb-4 hover:text-primary-800 transition-all data-[state=active]:font-semibold data-[state=active]:text-primary-800 data-[state=active]:border-b-2 data-[state=active]:border-primary-800"
              >
                {value.title}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <SectionHeader
            title="Get to Know JIS"
            description="JIS is more than an international school in Jakarta; it’s a community with over 70 years of history and student excellence."
            linkLabel="Learn More"
            linkHref="#"
          />

          {content.getToKnowJis.map((value) => (
            <Tabs.Content key={value.title} value={value.title}>
              {/*<div className="grid grid-cols-1 md:grid-cols-5 mt-10">*/}
              <Slider {...settings}>
                {value.children.map((figure) => (
                  <figure
                    key={figure.title}
                    className="relative group overflow-hidden"
                  >
                    <Image
                      src={figure.image}
                      alt=""
                      width="600"
                      height="600"
                      className="object-cover h-[28rem] group-hover:scale-125 transition-all duration-1000"
                    />
                    <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
                    <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                      <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                        {figure.title}
                      </h3>
                      <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                        <p className="mb-4">{figure.description}</p>
                        <Link
                          href={figure.linkHref}
                          className="font-medium flex space-x-2 items-center"
                        >
                          <span>{figure.linkLabel}</span>
                          <IconArrowNarrowRight />
                        </Link>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </Slider>
              {/*</div>*/}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </Container>
    </section>
  );
}
