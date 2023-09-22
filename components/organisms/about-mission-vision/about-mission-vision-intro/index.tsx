"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import PageQuote from "../../../atoms/quote";
import { IconAssembly } from "@tabler/icons-react";
import {
  mission_vision,
  page_quote,
  page_title,
} from "@/dev/dummies/mission-vision";

interface Props {}

export default function AboutMissionVisionIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>{page_title}</PageTitle>
      <PageQuote>{page_quote}</PageQuote>

      <ul className="max-w-2xl space-y-10">
        {mission_vision.map((item) => (
          <li key={item} className="flex items-start space-x-4">
            <IconAssembly className="w-10" />
            <PageParagraph size="lg">{item}</PageParagraph>
          </li>
        ))}
      </ul>
    </Container>
  );
}
