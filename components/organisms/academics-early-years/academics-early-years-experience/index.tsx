import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsEarlyYearsExperience(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Student and Family Experience</PageTitle>

        <ul className="list-disc space-y-2 mt-8">
          <li>
            <PageParagraph>
              We value the home-school connection. We see you, Mitra Kasih
              parents, as partners in your student&apos;s education. Your input
              is valuable and we work together to support learning.
            </PageParagraph>
          </li>

          <li>
            <PageParagraph>
              Our highly qualified teaching staff looks after student wellbeing
              and ensures their first experience away from home is safe and
              comfortable.
            </PageParagraph>
          </li>

          <li>
            <PageParagraph>
              Every child is a unique student, so we personalize the learning
              experience to tailor their needs.
            </PageParagraph>
          </li>
        </ul>

        <PageTitle heading="h3" className="mt-10">
          Each Child Is Unique
        </PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            Each child is unique and is a competent learner with an innate
            curiosity about the world. It is our role as educators to provide a
            safe and nurturing environment for them to explore those curiosities
            and begin to develop a love of learning that they will build on for
            the remainder of their lives.
          </PageParagraph>

          <PageParagraph>
            Young children learn best through direct experiences with the world
            rather than through abstract and formal academic practices. The
            Mitra Kasih Early Years and Kindergarten Program is supported by
            qualified, expert educators who guide young children in their
            acquisition of knowledge and their development of content, skills,
            and attitudes, preparing them for elementary school.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
