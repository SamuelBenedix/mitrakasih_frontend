import React from "react";
import Image from "next/image";
import { app } from "@/config/app";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Container from "@/components/atoms/container";
import { cn } from "@/lib/utils";

interface Props {}

export default function HomeHero(props: Props) {
  const {} = props;

  return (
    <section>
      <figure className="relative">
        <Image
          src={app.images.school}
          alt={app.title}
          // FIXME Benerin
          width={6000}
          height={6000}
          className="object-cover w-full h-screen"
        />
        <header>
          <div
            className={cn(
              "flex h-[8rem] flex-row justify-between items-end px-10 absolute inset-x-0 top-0 text-white",
            )}
          >
            <div>
              <Image
                src={app.images.logo}
                alt={app.title}
                width={100}
                height={100}
              />
            </div>
            <div className="mb-4">
              <p className="text-3xl">#ExperienceJIS</p>
            </div>
          </div>
        </header>
        <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[90%] bottom-0 inset-x-0" />
        <figcaption className="absolute bottom-0 inset-x-0">
          <div className="flex flex-col sm:flex-row text-white pb-20 pt-10 max-w-4xl md:space-x-10 border-t md:mx-40">
            <p className="text-4xl font-bold">Inquire to Learn More</p>
            <p>Take the first step to joining our community today. </p>
            <p className="flex flex-row space-x-2 w-40 font-medium">
              Inquire Now <IconArrowNarrowRight />
            </p>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}
