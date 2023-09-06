import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import CommonLink from "@/components/atoms/common-link";

interface Props {}

export default function ActivitiesAcademySports(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">
          Mitra Kasih Academy & Community Sports
        </PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            For students, and parents, looking to take part in extra fun, many
            additional activities can be found through Mitra Kasih Academy and
            Community Sports.
          </PageParagraph>

          <PageParagraph>
            These programs were established with the aim of offering quality,
            high interest academic, fitness, creative and sports activities
            beyond the normal Mitra Kasih School curriculum and ASAs in order to
            better serve our community.
          </PageParagraph>

          <PageParagraph>
            These activities are run by both expatriate and local instructors
            and coaches who have specialized knowledge in their field and,
            therefore, carry a separate fee per program.
          </PageParagraph>

          <footer>
            <CommonLink href="#">Learn more</CommonLink>
          </footer>
        </article>
      </Container>
    </section>
  );
}
