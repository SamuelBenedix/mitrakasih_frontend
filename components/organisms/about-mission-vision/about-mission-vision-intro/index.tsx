"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import PageQuote from "../../../atoms/quote";
import { IconAssembly } from "@tabler/icons-react";
import * as Tabs from "@radix-ui/react-tabs";
import {
  mission_vision,
  page_quote,
  page_title,
  quality_learnings,
  striving_list,
} from "@/dev/dummies/mission-vision";

interface Props {}

export default function AboutMissionVisionIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
    <Container size="md">
      <PageTitle>{page_title.mission}</PageTitle>
      <PageQuote>{page_quote.mission}</PageQuote>

      <ul className="max-w-2xl space-y-10">
        {mission_vision.mission.map((item) => (
          <li key={item} className="flex items-start space-x-4">
            <IconAssembly className="w-10" />
            <PageParagraph size="lg">{item}</PageParagraph>
          </li>
        ))}
      </ul>
    </Container>
      <Container size="md">
        <PageTitle>{page_title.vision}</PageTitle>
        <PageQuote>{page_quote.vision}</PageQuote>

        <ul className="max-w-2xl space-y-10">
          {mission_vision.vision.map((item) => (
            <li key={item} className="flex items-start space-x-4">
              <IconAssembly className="w-10" />
              <PageParagraph size="lg">{item}</PageParagraph>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
