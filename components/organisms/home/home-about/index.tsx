import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { app } from "@/config/app";
import LeafBlue from "@/components/atoms/leaf-blue";

interface Props {}

export default function HomeAbout(props: Props) {
  const {} = props;

  return (
    <section className="h-screen relative flex justify-center items-center">
      <div>
        <Image
          src="/images/leaf_yellow.svg"
          alt=""
          height={100}
          width={100}
          className="absolute -top-[28rem] -left-[36rem] w-2/3 -z-10 animate-bounce-leaf-yellow"
        />
      </div>
      <Image
        src="/images/leaf_orange.svg"
        alt=""
        height={100}
        width={100}
        className="absolute -top-[10rem] right-0 w-1/4 -z-10 animate-bounce-leaf-orange"
      />
      <LeafBlue className="absolute bottom-0 -right-[10rem] w-1/3 -z-10 animate-bounce-leaf-blue" />
      <Image
        src="/images/leaf_green.svg"
        alt=""
        height={100}
        width={100}
        className="absolute bottom-0 -left-[8rem] w-1/5 -z-10 animate-bounce-leaf-green"
      />
      <Container>
        <div className="flex flex-col items-center max-w-2xl">
          <Image src="/images/logo.png" alt="" height={180} width={180} />
          <p className="text-primary-800 text-center text-3xl leading-[3rem]">
            At Mitra Kasih, we prepare students from across the globe to be best
            in what they aspire for and at the same time, be best for the world
            they live in.
          </p>
        </div>
      </Container>
    </section>
  );
}
