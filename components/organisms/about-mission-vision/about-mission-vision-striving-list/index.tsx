"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/heading";
import PageParagraph from "@/components/atoms/paragraph";
import {
  _strivingList,
  _strivingListDescription,
  _strivingListTitle,
} from "@/data/about_mission_vision";

interface Props {}

export default function AboutMissionVisionStrivingList(props: Props) {
  const {} = props;

  return (
    <section className="my-16">
      <Container size="md">
        <PageTitle heading="h2">{_strivingListTitle}</PageTitle>

        <PageParagraph className="mt-8">
          {_strivingListDescription}
        </PageParagraph>

        <ul className="md:columns-2 px-6 md:px-0 list-disc gap-x-20 mt-8">
          {_strivingList.map((_item, key) => (
            <li key={key}>
              <PageParagraph>{_item}</PageParagraph>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
