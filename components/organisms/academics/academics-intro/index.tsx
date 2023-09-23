import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "@/components/atoms/heading";
import PageQuote from "@/components/atoms/quote";
import Figure from "@/components/molecules/figure";
import {
  _about,
  _academicFigures,
  _pageQuote,
  _pageTitle,
} from "@/data/academics";
import Paragraphs from "@/components/molecules/paragraphs";

interface Props {}

export default function AcademicsIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>{_pageTitle}</PageTitle>

      <PageQuote>{_pageQuote}</PageQuote>

      <article className="md:columns-2 gap-12 space-y-8">
        <Paragraphs paragraphs={_about} />
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {_academicFigures.map((_item, key) => (
          <Figure
            key={key}
            title={_item.title}
            image={_item.image}
            description={_item.description}
            linkLabel={_item.linkLabel}
            linkHref={_item.linkHref}
            size="sm"
          />
        ))}
      </div>
    </Container>
  );
}
