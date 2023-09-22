import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageQuote from "../../../atoms/quote";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsEarlyYearsIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>Early Years</PageTitle>
      <PageQuote>
        The Mitra Kasih Early Years and Kindergarten Program is an atmosphere of
        wonder, care, exploration and growth.
      </PageQuote>
      <article>
        <PageParagraph>
          It isn&apos;t long before a love of learning starts to grow within
          each student. When children are respected for who they are and their
          learning journeys are valued, they will excel at school and at home.
          This is the time when they first start to build friendships on their
          own, and begin to develop passions and interests — and their
          individuality and personality shines.
        </PageParagraph>
      </article>
    </Container>
  );
}
