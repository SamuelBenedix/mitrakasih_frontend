import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface Props {}

export default function HomeGallery(props: Props) {
  const {} = props;

  return (
    <section>
      <Container>
        <div className="mt-20">
          <div className="flex flex-col sm:flex-row pb-20 pt-10 max-w-4xl md:space-x-10 border-t md:mx-40">
            <p className="text-4xl font-bold">Inquire to Learn More</p>
            <p>Take the first step to joining our community today. </p>
            <p className="flex flex-row space-x-2 w-40 font-medium">
              Inquire Now <IconArrowNarrowRight />
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 mt-10">
            <figure className="relative group overflow-hidden">
              <Image
                src="/images/dummy_1.jpg"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  A Non-Profit School
                </h3>
                <p className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  100% of tuition is reinvested into your child's learning
                  experience.
                </p>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="/images/dummy_1.jpg"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  A Non-Profit School
                </h3>
                <p className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  100% of tuition is reinvested into your child's learning
                  experience.
                </p>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="/images/dummy_1.jpg"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  A Non-Profit School
                </h3>
                <p className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  100% of tuition is reinvested into your child's learning
                  experience.
                </p>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="/images/dummy_1.jpg"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  A Non-Profit School
                </h3>
                <p className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  100% of tuition is reinvested into your child's learning
                  experience.
                </p>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="/images/dummy_1.jpg"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="font-bold text-2xl mb-12 group-hover:mb-4">
                  A Non-Profit School
                </h3>
                <p className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  100% of tuition is reinvested into your child's learning
                  experience.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
