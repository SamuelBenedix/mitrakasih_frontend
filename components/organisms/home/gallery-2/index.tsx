import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";

interface Props {}

export default function HomeGallery2(props: Props) {
  const {} = props;

  return (
    <section>
      <Container>
        <div className="mt-40">
          <div className="grid grid-cols-5 sm:flex-row pb-20 pt-10 max-w-4xl md:space-x-10 border-t border-primary-800">
            <p className="text-5xl col-span-2 font-bold text-primary-800 grow">
              Life at JIS
            </p>
            <p className="col-span-2">
              Students at JIS love to learn, have fun, and discover new passions
              on our beautiful, spacious, and state-of-the-art campuses.
            </p>
            <p className="flex col-span-1 flex-row space-x-2 text-primary-800 w-40 font-medium">
              Learn More <IconArrowNarrowRight />
            </p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-5 mt-10">
            <div
              className={cn(
                styles.background,
                "absolute bg-blue-800 inset-0 w-[100rem] -translate-x-10 -translate-y-10",
              )}
            />
            <figure className="relative group overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/2000x2000"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">
                  <span className="text-6xl">20</span>
                  <span className="text-xl">Hectares</span>
                </h3>
                <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  <p className="mb-4">
                    100% of tuition is reinvested into your child's learning
                    experience.
                  </p>
                  <Link
                    href="#"
                    className="font-medium flex space-x-2 items-center"
                  >
                    <span>Schedule a Tour Today</span>
                    <IconArrowNarrowRight />
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/2000x2000"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">
                  <span className="text-6xl">1951</span>
                  <span className="text-xl">Founded</span>
                </h3>
                <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  <p className="mb-4">
                    100% of tuition is reinvested into your child's learning
                    experience.
                  </p>
                  <Link
                    href="#"
                    className="font-medium flex space-x-2 items-center"
                  >
                    <span>Schedule a Tour Today</span>
                    <IconArrowNarrowRight />
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/2000x2000"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">
                  <span className="text-6xl">2000+</span>
                  <span className="text-xl">Students</span>
                </h3>
                <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  <p className="mb-4">
                    100% of tuition is reinvested into your child's learning
                    experience.
                  </p>
                  <Link
                    href="#"
                    className="font-medium flex space-x-2 items-center"
                  >
                    <span>Schedule a Tour Today</span>
                    <IconArrowNarrowRight />
                  </Link>
                </div>
              </figcaption>
            </figure>
            <figure className="relative group overflow-hidden">
              <Image
                src="https://source.unsplash.com/random/2000x2000"
                alt=""
                width="600"
                height="600"
                className="object-cover h-[24rem] group-hover:scale-125 transition-all duration-1000"
              />
              <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[40%] bottom-0 inset-x-0" />
              <figcaption className="absolute bottom-0 translate-y-10 group-hover:translate-y-0 ease-out-quart inset-x-0 py-8 px-6 text-white group-hover:bg-black/20 group-hover:h-full h-1/2 transition-all duration-1000 flex flex-col group-hover:backdrop-blur justify-end">
                <h3 className="mb-12 font-bold group-hover:mb-4 flex flex-col">
                  <span className="text-6xl">300+</span>
                  <span className="text-xl">Clubs and Activities</span>
                </h3>
                <div className="opacity-0 h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
                  <p className="mb-4">
                    100% of tuition is reinvested into your child's learning
                    experience.
                  </p>
                  <Link
                    href="#"
                    className="font-medium flex space-x-2 items-center"
                  >
                    <span>Schedule a Tour Today</span>
                    <IconArrowNarrowRight />
                  </Link>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
