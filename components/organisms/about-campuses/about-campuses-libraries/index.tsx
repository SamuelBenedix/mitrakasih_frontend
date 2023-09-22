"use client";

import React from "react";
import PageTitle from "../../../atoms/heading";
import Container from "@/components/atoms/container";
import Library from "@/components/molecules/library";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AboutCampusesLibraries(props: Props) {
  const {} = props;

  const CampusImage = {
    TechLab: [
      {
        name: "TL1",
        image: "/images/documentations/excurr/coding/Coding (Large).JPG",
      },
      {
        name: "TL2",
        image: "/images/buildings/NK/DSC00283 (Large).JPG",
      },
    ],
    Playground: [
      {
        name: "PL1",
        image: "/images/buildings/NK/DSC00282 (Large).JPG",
      },
      {
        name: "PL2",
        image: "/images/buildings/NK/DSC00280 (Large).JPG",
      },
    ],
    Classrooms: [
      {
        name: "CL1",
        image: "/images/documentations/classes/HIGH/IMG-20220607-WA0022.jpg",
      },
      {
        name: "CL2",
        image: "/images/documentations/classes/MIDDLE/IMG-20220607-WA0024.jpg",
      },
    ],
    Makerspace: [
      {
        name: "MK1",
        image: "/images/documentations/activity_2023_2024/MKS00896 (Large).JPG",
      },
      {
        name: "MK2",
        image: "/images/documentations/activity_2023_2024/MKS09951 (Large).JPG",
      },
      {
        name: "MK3",
        image:
          "/images/documentations/three_way_conference/HIGH/IMG_20230911_151756 (Large).jpg",
      },
    ],
    Athletic: [
      {
        name: "AT1",
        image: "/images/documentations/activity_2023_2024/DSC00121 (Large).JPG",
      },
      {
        name: "AT2",
        image:
          "/images/documentations/FUNWEEK/MIIDLE HIGH/IMG-20230607-WA0033.jpg",
      },
      {
        name: "AT3",
        image: "/images/documentations/OLAHRAGA/NK/DSC00119 (Large).JPG",
      },
    ],
    Art: [
      {
        name: "AR1",
        image: "/images/documentations/pentas_seni/2022/DSC01279.JPG",
      },
      {
        name: "AR2",
        image: "/images/documentations/pentas_seni/2022/DSC01260.JPG",
      },
    ],
    Cafe: [
      {
        name: "CF1",
        image: "/images/documentations/activity_2023_2024/DSC00121 (Large).JPG",
      },
      {
        name: "CF2",
        image: "/images/documentations/activity_2023_2024/DSC00121 (Large).JPG",
      },
    ],
  };
  const dummies = [
    {
      name: "Lorem Impsum",
      image: getRandomImageUrl(),
    },
    {
      name: "Lorem Impsum",
      image: getRandomImageUrl(),
    },
    {
      name: "Lorem Impsum",
      image: getRandomImageUrl(),
    },
  ];
  return (
    <Container size="md">
      {/* <section className="mt-20">
      <PageTitle heading="h2" className="text-center">
        Libraries
      </PageTitle>
      <div className="mt-10">
        <Library libraries={dummies} />
          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </div>
    </section> */}
      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Design and Technology Labs
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.TechLab} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Classrooms
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Classrooms} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Makerspace
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Makerspace} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Playgrounds
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Playground} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Athletic Facilities
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Athletic} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Visual and Performing Arts
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Art} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      {/* <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Cafetarias
        </PageTitle>
        <div className="mt-10">
          <Library libraries={CampusImage.Cafe} />

          <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at Mitra Kasih are a haven for the avid reader,
              curious explorer, budding adventurer, aspiring scientist — every
              member of our diverse Dragon community. They serve a multitude of
              purposes, all geared toward fostering an immersive learning
              experience further enhanced by the power of literature,
              information, and technology.
            </PageParagraph>
          </div>
        </div>
      </section> */}
    </Container>
  );
}
