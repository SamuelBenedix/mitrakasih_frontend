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
      <PageParagraph className="text-justify" size="lg">Penetapan visi ini mempertimbangkan hal-hal berikut.</PageParagraph>
      <ol className="space-y-10 mt-5">
        {_missionVisions.vision.map((item,number) => (
          <li key={item} >
            <PageParagraph className="text-justify" size="lg">{number+1}. {item}</PageParagraph>
          </li>
        ))}
      </ol>
      <PageTitle className="mt-20">{_pageTitle.mission}</PageTitle>

      <PageQuote>{_pageQuote.mission}</PageQuote>

      <ol className="space-y-10 mt-5">
        {_missionVisions.mission.map((item,number) => (
          <li key={item} >
            <PageParagraph className="text-justify" size="lg">{number+1}. {item}</PageParagraph>
          </li>
        ))}
      </ol>
      <PageTitle className="mt-20">{_pageTitle.goal}</PageTitle>

      <PageQuote>{_pageQuote.goal}</PageQuote>

      <ol className="space-y-10 mt-5">
        {_missionVisions.goal.map((item,number) => (
          <li key={item} >
            <PageParagraph className="text-justify" size="lg">{number+1}. {item}</PageParagraph>
          </li>
        ))}
      </ol>
    </Container>
  );
}
