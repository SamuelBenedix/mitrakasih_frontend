import React from "react";
import Container from "@/components/atoms/container";
import Heading from "@/components/atoms/heading";
import Paragraphs from "../../../molecules/paragraphs";
import { _about, _pageTitle } from "@/data/about";

interface Props {}

export default function AboutAbout(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <Heading>{_pageTitle}</Heading>

      <Paragraphs paragraphs={_about} />
    </Container>
  );
}
