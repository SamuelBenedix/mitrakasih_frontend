import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import { exploring_campus } from "@/dev/dummies/admissions";
import Figure from "@/components/molecules/figure";

interface Props {}

export default function AdmissionExploringCampus(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Explore Our Campuses</PageTitle>
        <article className="mt-10">
          <PageParagraph>
            Visit Mitra Kasih virtually today! Click on one of our campuses
            below and take a self-guided 360° virtual tour.
          </PageParagraph>
        </article>

        <div className="grid grid-cols-2 gap-8 mt-8">
          {exploring_campus.map((item) => (
            <Figure
              key={item.title}
              title={item.title}
              image={item.image}
              linkLabel={item.linkLabel}
              linkHref={item.linkHref}
              size="sm"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
