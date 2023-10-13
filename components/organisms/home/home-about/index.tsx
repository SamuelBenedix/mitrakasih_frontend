import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import LeafBlue from "@/components/atoms/leaf-blue";
import { _about } from "@/data/home";

interface Props {}

export default function HomeAbout(props: Props) {
  const {} = props;

  return (
    <section className="py-60 md:py-0 md:h-screen relative flex justify-center items-center">
      <div>
        <Image
          src="https://www.mitrakasih.sch.id/images/leaf_yellow.svg"
          alt=""
          height={100}
          width={100}
          className="absolute -top-[28rem] -left-[36rem] w-2/3 -z-10 animate-bounce-leaf-yellow"
        />
      </div>
      <Image
        src="https://www.mitrakasih.sch.id/images/leaf_orange.svg"
        alt=""
        height={100}
        width={100}
        className="absolute -top-[10rem] right-0 w-1/4 -z-10 animate-bounce-leaf-orange"
      />
      <LeafBlue className="absolute bottom-0 -right-[10rem] w-1/3 -z-10 animate-bounce-leaf-blue" />
      <Image
        src="https://www.mitrakasih.sch.id/images/leaf_green.svg"
        alt=""
        height={100}
        width={100}
        className="absolute bottom-0 -left-[8rem] w-1/5 -z-10 animate-bounce-leaf-green"
      />
      <Container>
        <div className="flex flex-col items-center max-w-xs md:max-w-2xl">
          <div>
            <Image
              src="https://www.mitrakasih.sch.id/images/logo.png"
              alt=""
              height={180}
              width={180}
              className="h-16 md:h-36 w-full"
            />
          </div>
          <p className="text-primary-800 text-center md:text-3xl leading-[1.8rem] md:leading-[3rem] mt-4 md:mt-10">
            {_about}
          </p>
        </div>
      </Container>
    </section>
  );
}
