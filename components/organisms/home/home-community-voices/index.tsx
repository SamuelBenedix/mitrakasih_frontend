import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils/utils";
import {
  community_voices_dummies,
  tab_panel_second_dummies,
} from "@/dev/dummies/home";
import HomeSectionHeader from "../../../molecules/section-header";
import Slider from "react-slick";

interface Props {}

export default function HomeCommunityVoices(props: Props) {
  const {} = props;

  return (
    <section className="mt-40">
      <Container size="md">
        <HomeSectionHeader
          title={community_voices_dummies.title}
          description={community_voices_dummies.description}
          linkLabel={community_voices_dummies.linkLabel}
          linkHref={community_voices_dummies.linkHref}
        />

        <div className="relative">
          <div
            className={cn(
              "absolute bg-blue-800 bottom-0 h-[8rem] w-[100rem] -translate-x-10 translate-y-10",
            )}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-4">
            {community_voices_dummies.body.map((dummy) => (
              <figure
                key={dummy.title}
                className="relative group overflow-hidden"
              >
                <Image
                  src={dummy.image}
                  alt=""
                  width="600"
                  height="600"
                  className="object-cover h-[28rem] group-hover:scale-125 transition-all duration-1000"
                />
                <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
                <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                  <h3 className="font-bold text-2xl mb-12 group-hover:mb-4 flex flex-col">
                    {dummy.title}
                  </h3>
                  <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                    <p className="mb-4">{dummy.description}</p>
                    {/*<Link*/}
                    {/*  href={dummy.linkHref}*/}
                    {/*  className="font-medium flex space-x-2 items-center"*/}
                    {/*>*/}
                    {/*  <span>{dummy.linkLabel}</span>*/}
                    {/*  <IconArrowNarrowRight />*/}
                    {/*</Link>*/}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/*<div className="mt-40 mb-10">*/}
        {/*  <div className="relative grid grid-cols-1 md:grid-cols-5 mt-10">*/}
        {/*    <div*/}
        {/*      className={cn(*/}
        {/*        "absolute bg-blue-800 bottom-0 h-[8rem] w-[100rem] -translate-x-10 translate-y-10",*/}
        {/*      )}*/}
        {/*    />*/}
        {/*    <figure className="relative group overflow-hidden">*/}
        {/*      <Image*/}
        {/*        src="https://source.unsplash.com/random/2000x2000"*/}
        {/*        alt=""*/}
        {/*        width="600"*/}
        {/*        height="600"*/}
        {/*        className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"*/}
        {/*      />*/}
        {/*      <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />*/}
        {/*      <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">*/}
        {/*        <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">*/}
        {/*          <span className="text-6xl">20</span>*/}
        {/*          <span className="text-xl">Hectares</span>*/}
        {/*        </h3>*/}
        {/*        <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">*/}
        {/*          <p className="mb-4">*/}
        {/*            100% of tuition is reinvested into your child's learning*/}
        {/*            experience.*/}
        {/*          </p>*/}
        {/*          <Link*/}
        {/*            href="#"*/}
        {/*            className="font-medium flex space-x-2 items-center"*/}
        {/*          >*/}
        {/*            <span>Schedule a Tour Today</span>*/}
        {/*            <IconArrowNarrowRight />*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </figcaption>*/}
        {/*    </figure>*/}
        {/*    <figure className="relative group overflow-hidden">*/}
        {/*      <Image*/}
        {/*        src="https://source.unsplash.com/random/2000x2000"*/}
        {/*        alt=""*/}
        {/*        width="600"*/}
        {/*        height="600"*/}
        {/*        className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"*/}
        {/*      />*/}
        {/*      <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />*/}
        {/*      <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">*/}
        {/*        <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">*/}
        {/*          <span className="text-6xl">1951</span>*/}
        {/*          <span className="text-xl">Founded</span>*/}
        {/*        </h3>*/}
        {/*        <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">*/}
        {/*          <p className="mb-4">*/}
        {/*            100% of tuition is reinvested into your child's learning*/}
        {/*            experience.*/}
        {/*          </p>*/}
        {/*          <Link*/}
        {/*            href="#"*/}
        {/*            className="font-medium flex space-x-2 items-center"*/}
        {/*          >*/}
        {/*            <span>Schedule a Tour Today</span>*/}
        {/*            <IconArrowNarrowRight />*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </figcaption>*/}
        {/*    </figure>*/}
        {/*    <figure className="relative group overflow-hidden">*/}
        {/*      <Image*/}
        {/*        src="https://source.unsplash.com/random/2000x2000"*/}
        {/*        alt=""*/}
        {/*        width="600"*/}
        {/*        height="600"*/}
        {/*        className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"*/}
        {/*      />*/}
        {/*      <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />*/}
        {/*      <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">*/}
        {/*        <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">*/}
        {/*          <span className="text-6xl">2000+</span>*/}
        {/*          <span className="text-xl">Students</span>*/}
        {/*        </h3>*/}
        {/*        <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">*/}
        {/*          <p className="mb-4">*/}
        {/*            100% of tuition is reinvested into your child's learning*/}
        {/*            experience.*/}
        {/*          </p>*/}
        {/*          <Link*/}
        {/*            href="#"*/}
        {/*            className="font-medium flex space-x-2 items-center"*/}
        {/*          >*/}
        {/*            <span>Schedule a Tour Today</span>*/}
        {/*            <IconArrowNarrowRight />*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </figcaption>*/}
        {/*    </figure>*/}
        {/*    <figure className="relative group overflow-hidden">*/}
        {/*      <Image*/}
        {/*        src="https://source.unsplash.com/random/2000x2000"*/}
        {/*        alt=""*/}
        {/*        width="600"*/}
        {/*        height="600"*/}
        {/*        className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"*/}
        {/*      />*/}
        {/*      <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />*/}
        {/*      <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">*/}
        {/*        <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">*/}
        {/*          <span className="text-6xl">300+</span>*/}
        {/*          <span className="text-xl">Clubs and Activities</span>*/}
        {/*        </h3>*/}
        {/*        <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">*/}
        {/*          <p className="mb-4">*/}
        {/*            100% of tuition is reinvested into your child's learning*/}
        {/*            experience.*/}
        {/*          </p>*/}
        {/*          <Link*/}
        {/*            href="#"*/}
        {/*            className="font-medium flex space-x-2 items-center"*/}
        {/*          >*/}
        {/*            <span>Schedule a Tour Today</span>*/}
        {/*            <IconArrowNarrowRight />*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </figcaption>*/}
        {/*    </figure>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </Container>
    </section>
  );
}
