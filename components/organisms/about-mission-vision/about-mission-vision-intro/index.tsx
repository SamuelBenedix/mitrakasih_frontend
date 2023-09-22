"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/heading";
import PageParagraph from "@/components/atoms/paragraph";
import PageQuote from "@/components/atoms/quote";
import { IconAssembly } from "@tabler/icons-react";
import {
  _missionVisions,
  _pageTitle,
  _pageQuote,
} from "@/data/about_mission_vision";

interface Props {}

export default function AboutMissionVisionIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>{_pageTitle}</PageTitle>
      <PageQuote>{_pageQuote}</PageQuote>

      <ul className="max-w-2xl space-y-10">
        {_missionVisions.map((item) => (
          <li key={item} className="flex items-start space-x-4">
            <IconAssembly className="w-10" />
            <PageParagraph size="lg">{item}</PageParagraph>
          </li>
        ))}
      </ul>
    </Container>
  );
}
