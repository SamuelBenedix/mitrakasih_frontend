"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import * as Tabs from "@radix-ui/react-tabs";
import { quality_learnings } from "@/dev/dummies/mission-vision";

interface Props {}

export default function AboutMissionVisionQualityLearners(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">How do we define learning?</PageTitle>
        <article className="mt-8">
          <PageParagraph>
            Learning is a lifelong process that transforms us through rigorous
            engagement in meaningful experiences. At Mitra Kasih, quality
            learning happens when students are resourceful, resilient, relating,
            and reflective. We call these the 4 Rs.
          </PageParagraph>
        </article>

        <div className="mt-10">
          <Tabs.Root defaultValue={quality_learnings[0].name}>
            <Tabs.List className="space-x-6 border-b">
              {quality_learnings.map((quality_learning) => (
                <Tabs.Trigger
                  key={quality_learning.name}
                  value={quality_learning.name}
                  className="pb-4 hover:text-primary-800 transition-all data-[state=active]:font-semibold data-[state=active]:text-primary-800 border-transparent border-b-2 data-[state=active]:border-primary-800"
                >
                  {quality_learning.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="mt-8">
              {quality_learnings.map((quality_learning) => (
                <Tabs.Content
                  key={quality_learning.name}
                  value={quality_learning.name}
                >
                  <div className="flex flex-col md:flex-row space-y-6 px-6 md:px-0 md:space-y-0 md:space-x-8">
                    <div>
                      <PageParagraph className="w-[20rem]">
                        {quality_learning.name} learning is happening when
                        learners:
                      </PageParagraph>
                    </div>
                    <div className="grow">
                      <ul className="list-disc">
                        {quality_learning.list.map((item) => (
                          <li key={item}>
                            <PageParagraph>{item}</PageParagraph>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Tabs.Content>
              ))}
            </div>
          </Tabs.Root>
        </div>
      </Container>
    </section>
  );
}
