import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import PageQuote from "../../../atoms/quote";

interface Props {}

export default function AdmissionIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Admissions</PageTitle>
        <article className="mt-10">
          <PageParagraph>
            What is important to you when choosing a school for your children?
          </PageParagraph>
          <PageParagraph className="mt-4">
            Is it a challenging, rigorous and internationally recognized
            curriculum? Opportunities to engage in sports, creative arts and
            community service? Supported learning in an environment that
            embraces diversity? Or perhaps it is something else that’s unique to
            your particular situation.
          </PageParagraph>
          <PageQuote>
            Together let’s explore how Mitra Kasih can meet your needs and start
            your child on the journey to being “best for the world”.
          </PageQuote>
        </article>
      </Container>
    </section>
  );
}
