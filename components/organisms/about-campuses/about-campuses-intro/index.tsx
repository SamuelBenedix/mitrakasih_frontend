import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/heading";
import Paragraphs from "@/components/atoms/paragraphs";
import Paragraph from "@/components/atoms/paragraph";

interface Props {}

export default function AboutCampusesIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>Our School</PageTitle>

      <Paragraphs>
        <Paragraph>
          Across a combined 20 hectares, our four divisions create one
          community. The Middle and High School campus is located in Cilandak,
          the Pondok Indah Elementary campus is located in Pondok Indah and
          connects to the Cilandak campus via a path and walking bridge, and the
          Pattimura Elementary campus is located in Kebayoran Baru.
        </Paragraph>

        <Paragraph>
          Our facilities are an important part of the learning experience at
          Mitra Kasih. We renovate and update our facilities on a regular basis
          to enhance our teaching practices and the student experience.
        </Paragraph>

        <Paragraph>
          Our school have tranquil gardens, swimming pools, sports fields,
          state-of-art STEAM labs, creative arts performance venues, and
          libraries. Mitra Kasih is an oasis, and we often find that our
          students and parents never want to leave!
        </Paragraph>
      </Paragraphs>
    </Container>
  );
}
