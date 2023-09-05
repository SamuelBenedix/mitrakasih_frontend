"use client";

import React from "react";
import PageTitle from "../../../atoms/heading";
import Container from "@/components/atoms/container";
import Library from "@/components/molecules/library";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AboutCampusesLibraries(props: Props) {
  const {} = props;

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
      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Libraries
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Design and Technology Labs
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Classrooms
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Makerspace
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Playgrounds
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Athletic Facilities
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Visual and Performing Arts
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <PageTitle heading="h2" className="text-center">
          Cafetarias
        </PageTitle>
        <div className="mt-10">
          <Library libraries={dummies} />

          <div className="bg-primary-800 p-10 mt-16">
            <PageParagraph className="text-white">
              The libraries at JIS are a haven for the avid reader, curious
              explorer, budding adventurer, aspiring scientist — every member of
              our diverse Dragon community. They serve a multitude of purposes,
              all geared toward fostering an immersive learning experience
              further enhanced by the power of literature, information, and
              technology.
            </PageParagraph>
          </div>
        </div>
      </section>
    </Container>
  );
}
