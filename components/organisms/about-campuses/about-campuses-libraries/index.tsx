"use client";

import React from "react";
import PageTitle from "../../../atoms/heading";
import Container from "@/components/atoms/container";
import Library from "@/components/molecules/library";
import PageParagraph from "../../../atoms/paragraph";
import { _libraries } from "@/data/about_campuses";

interface Props {}

export default function AboutCampusesLibraries(props: Props) {
  const {} = props;

  return (
    <Container size="md">
      {_libraries.map((_item, key) => (
        <section key={key} className="mt-20">
          <PageTitle heading="h2" className="text-center">
            {_item.title}
          </PageTitle>

          <div className="mt-10">
            <Library libraries={_item.images} />

            <div className="bg-primary-800 py-6 px-4 md:p-10 mt-16">
              <PageParagraph className="text-white">
                {_item.description}
              </PageParagraph>
            </div>
          </div>
        </section>
      ))}
    </Container>
  );
}
