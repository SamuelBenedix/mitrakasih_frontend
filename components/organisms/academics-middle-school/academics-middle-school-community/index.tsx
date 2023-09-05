import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsMiddleSchoolCommunity(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Community of Care</PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            We have a commitment to making sure that each student is
            appropriately supported and cared for. This commitment goes beyond
            the classroom and looks after students’ physical and mental
            wellbeing. As a school, we share this responsibility within a
            Community of Care.
          </PageParagraph>

          <PageParagraph>
            We seek to promote within our students a positive outlook for life,
            and we help them become balanced and successful citizens,
            well-equipped with the ability to think critically and logically
            about the information they access and the decisions they make.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
