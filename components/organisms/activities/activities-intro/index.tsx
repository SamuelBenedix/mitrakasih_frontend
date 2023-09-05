import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import Quote from "@/components/atoms/quote";

interface Props {}

export default function ActivitiesIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Activities</PageTitle>

        <Quote>
          Students have the choice to engage in clubs and activities that
          further enhance their learning journey at Mitra Kasih, from TEDxMitra
          Kasih and student leadership to Service Learning and co-curricular
          programs.
        </Quote>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            Each is designed to not only challenge students to be Best for the
            World but to also foster respect, a spirit of collaboration,
            inclusivity, and confidence.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
