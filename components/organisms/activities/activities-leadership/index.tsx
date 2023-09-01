import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function ActivitiesLeadership(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Student Leadership</PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            While all students at JIS develop a sense of responsibility and
            leadership throughout their school day, leadership opportunities do
            become more formalized as they get older. JIS students are
            encouraged to be involved in as many activities as they can, to
            always challenge themselves, and seek opportunities to be leaders.
          </PageParagraph>

          <PageParagraph>
            Student leadership can happen through organizing events on the
            Middle School's Bali Stage to running for a spot in the Central
            Student Council in High School. At JIS, we know how important it is
            for students to learn how they can be leaders for tomorrow.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
