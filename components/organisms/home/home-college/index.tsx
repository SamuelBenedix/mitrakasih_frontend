import Container from "@/components/atoms/container";
import React from "react";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function HomeCollege() {
  return (
    <section>
      <Container>
        <div className="mt-40">
          <h2 className="text-5xl col-span-2 font-bold text-primary-800 grow">
            Where Mitra Kasih Students Go
          </h2>
          <div className="ml-20 max-w-xl text-lg mt-10">
            <p className="mb-8">
              99% of Mitra Kasih graduates choose to attend University after
              graduation. Students are empowered to find the University that is
              right for them. Mitra Kasih students can be found at large and
              small higher education universities all over the world.
            </p>
            <Link
              href="#"
              className="font-medium flex space-x-2 items-center text-primary-800"
            >
              <span>See the full list of university acceptances</span>
              <IconArrowNarrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
