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
    <PageTitle>{_pageTitle.vision}</PageTitle>
    <PageQuote>{_pageQuote.vision}</PageQuote>

    <ul className="max-w-2xl space-y-10">
      {_missionVisions.vision.map((item) => (
        <li key={item} className="flex items-start space-x-4">
          <IconAssembly className="w-10" />
          <PageParagraph size="lg">{item}</PageParagraph>
        </li>
      ))}
    </ul>
      <PageTitle>{_pageTitle.mission}</PageTitle>
      <PageQuote>{_pageQuote.mission}</PageQuote>

      <ul className="max-w-2xl space-y-10">
        {_missionVisions.mission.map((item) => (
          <li key={item} className="flex items-start space-x-4">
            <IconAssembly className="w-10" />
            <PageParagraph size="lg">{item}</PageParagraph>
          </li>
        ))}
      </ul>
      <PageTitle>{_pageTitle.goal}</PageTitle>
      <PageQuote>{_pageQuote.goal}</PageQuote>

      <ul className="max-w-2xl space-y-10">
        {_missionVisions.goal.map((item) => (
          <li key={item} className="flex items-start space-x-4">
            <IconAssembly className="w-10" />
            <PageParagraph size="lg">{item}</PageParagraph>
          </li>
        ))}
      </ul>
    </Container>
  );
}
