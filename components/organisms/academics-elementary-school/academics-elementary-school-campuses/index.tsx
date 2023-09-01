import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsElementarySchoolCampuses(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Two Campuses, One School</PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            We have two JIS campuses that offer the Early Years and Kindergarten
            Program: Pattimura Elementary (PEL) and Pondok Indah Elementary
            (PIE). The program, faculty expertise, and learning experience at
            both campuses are the same. Curriculum and lesson planning are
            coordinated between the two campuses to ensure every JIS student is
            challenged academically and supported socially.
          </PageParagraph>

          <PageParagraph>
            The main difference between the two campuses is their location.
            During the application process, you can speak with an Admissions
            Officer about which campus is right for you. You can virtually tour
            both campuses below.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
