import React from "react";
import Container from "@/components/atoms/container";
import Figure from "@/components/molecules/figure";
import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import { _membership } from "@/data/about";
import FigureContainer from "@/components/molecules/figure-container";

interface Props {}

export default function AboutMembership(props: Props) {
  const {} = props;

  return (
    <section>
      <Container size="md">
        <Heading heading="h2">{_membership.title}</Heading>

        <Paragraph>{_membership.description}</Paragraph>

        <FigureContainer>
          {_membership.figures.map((_item, key) => (
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
        </FigureContainer>
      </Container>
    </section>
  );
}
