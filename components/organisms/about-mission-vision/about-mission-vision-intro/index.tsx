'use client';

import React from 'react';
import Container from '@/components/atoms/container';
import PageTitle from '@/components/atoms/heading';
import PageParagraph from '@/components/atoms/paragraph';
import PageQuote from '@/components/atoms/quote';
import {
  _missionVisions,
  _pageTitle,
  _pageQuote,
} from '@/data/about_mission_vision';

interface Props {}

export default function AboutMissionVisionIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle heading="h4">{_pageTitle.vision}</PageTitle>

      <PageQuote smallText className="pt-2 pb-6">
        {_pageQuote.vision}
      </PageQuote>
      <PageParagraph className="text-justify" size="lg">
        Penetapan visi ini mempertimbangkan hal-hal berikut.
      </PageParagraph>
      <ol className="space-y-5 mt-5 ">
        {_missionVisions.vision.map((item, number) => (
          <li key={item}>
            <PageParagraph size="lg">
              {number + 1}. {item}
            </PageParagraph>
          </li>
        ))}
      </ol>

      <PageTitle heading="h4" className="mt-20">
        {_pageTitle.mission}
      </PageTitle>
      <PageQuote smallText className="pt-2 ">
        {_pageQuote.mission}
      </PageQuote>
      <ol className="space-y-5 mt-5">
        {_missionVisions.mission.map((item, number) => (
          <li key={item}>
            <PageParagraph className="text-justify" size="lg">
              {number + 1}. {item}
            </PageParagraph>
          </li>
        ))}
      </ol>

      <PageTitle heading="h4" className="mt-20">
        {_pageTitle.goal}
      </PageTitle>
      <PageQuote smallText className="pt-2 ">
        {_pageQuote.goal}
      </PageQuote>
      <ol className="space-y-5 mt-5">
        {_missionVisions.goal.map((item, number) => (
          <li key={item}>
            <PageParagraph className="text-justify" size="lg">
              {number + 1}. {item}
            </PageParagraph>
          </li>
        ))}
      </ol>
    </Container>
  );
}
