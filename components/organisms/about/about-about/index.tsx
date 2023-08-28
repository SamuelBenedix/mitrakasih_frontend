import React from "react";
import Container from "@/components/atoms/container";
import Image from "next/image";
import { app } from "@/config/app";
import LeafBlue from "@/components/atoms/leaf-blue";
import PageTitle from "../../../atoms/page-heading";
import PageParagraph from "@/components/atoms/page-paragraph";

interface Props {}

export default function AboutAbout(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>About JIS</PageTitle>
        <article className="mt-10 space-y-4">
          <PageParagraph>
            We create, teach, and learn together across three garden-like
            campuses with leading-edge facilities that support independent
            inquiry, critical thinking, problem-solving, and collaborative
            study.
          </PageParagraph>
          <PageParagraph>
            We play sports, put on drama productions, paint, sculpt, engineer,
            and create. Our students are able to explore and grow in a safe
            environment and are encouraged to follow their passions to be as
            successful as they can be.
          </PageParagraph>
          <PageParagraph>
            The JIS community is global and stretches well beyond the school. As
            we always say, Once a Dragon, Always a Dragon!
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
