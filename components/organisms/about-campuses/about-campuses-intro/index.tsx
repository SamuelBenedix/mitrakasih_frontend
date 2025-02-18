import React from 'react';
import Container from '@/components/atoms/container';
import PageTitle from '@/components/atoms/heading';
import Paragraphs from '../../../molecules/paragraphs';
import { _about, _pageTitle } from '@/data/about_campuses';

interface Props {}

export default function AboutCampusesIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle heading="h4">{_pageTitle}</PageTitle>

      <Paragraphs size="md" paragraphs={_about} />
    </Container>
  );
}
