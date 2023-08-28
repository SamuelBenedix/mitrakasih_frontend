import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/page-heading";
import PageParagraph from "@/components/atoms/page-paragraph";

interface Props {}

export default function AboutCampusesIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Our Campuses</PageTitle>
        <article className="mt-10 space-y-4">
          <PageParagraph>
            Across a combined 20 hectares, our four divisions create one
            community. The Middle and High School campus is located in Cilandak,
            the Pondok Indah Elementary campus is located in Pondok Indah and
            connects to the Cilandak campus via a path and walking bridge, and
            the Pattimura Elementary campus is located in Kebayoran Baru.
          </PageParagraph>
          <PageParagraph>
            Our facilities are an important part of the learning experience at
            JIS. We renovate and update our facilities on a regular basis to
            enhance our teaching practices and the student experience.
          </PageParagraph>
          <PageParagraph>
            Our campuses have tranquil gardens, swimming pools, sports fields,
            state-of-art STEAM labs, creative arts performance venues, and
            libraries. JIS is an oasis, and we often find that our students and
            parents never want to leave!
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
