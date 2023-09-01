import React from "react";
import Container from "@/components/atoms/container";
import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import Paragraphs from "@/components/atoms/paragraphs";

interface Props {}

export default function AboutAbout(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <Heading>About Mitra Kasih</Heading>

        <Paragraphs>
          <Paragraph>
            We create, teach, and learn together across three garden-like
            campuses with leading-edge facilities that support independent
            inquiry, critical thinking, problem-solving, and collaborative
            study.
          </Paragraph>

          <Paragraph>
            We play sports, put on drama productions, paint, sculpt, engineer,
            and create. Our students are able to explore and grow in a safe
            environment and are encouraged to follow their passions to be as
            successful as they can be.
          </Paragraph>

          <Paragraph>
            The Mitra Kasih community is global and stretches well beyond the
            school. As we always say, Once a Dragon, Always a Dragon!
          </Paragraph>
        </Paragraphs>
      </Container>
    </section>
  );
}
