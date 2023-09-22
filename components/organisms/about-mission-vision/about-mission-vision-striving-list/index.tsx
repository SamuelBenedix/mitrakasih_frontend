"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import { striving_list } from "@/dev/dummies/mission-vision";

interface Props {}

export default function AboutMissionVisionStrivingList(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">
          Shared Learning and Pedagogical Approaches
        </PageTitle>
        <PageParagraph className="mt-8">
          At Mitra Kasih we strive to:
        </PageParagraph>
        <ul className="md:columns-2 px-6 md:px-0 list-disc gap-x-20 mt-8">
          {striving_list.map((item) => (
            <li key={item}>
              <PageParagraph>{item}</PageParagraph>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
