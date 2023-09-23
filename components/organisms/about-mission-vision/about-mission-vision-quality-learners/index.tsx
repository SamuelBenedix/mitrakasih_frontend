"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import * as Tabs from "@radix-ui/react-tabs";
import { _qualityLearnings } from "@/data/about_mission_vision";

interface Props {}

export default function AboutMissionVisionQualityLearners(props: Props) {
  const {} = props;

  return (
    <section className="my-16">
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
          <Tabs.Root defaultValue={_qualityLearnings[0].name}>
            <Tabs.List className="space-x-6 border-b">
              {_qualityLearnings.map((qualityLearning) => (
                <Tabs.Trigger
                  key={qualityLearning.name}
                  value={qualityLearning.name}
                  className="pb-4 hover:text-primary-800 transition-all data-[state=active]:font-semibold data-[state=active]:text-primary-800 border-transparent border-b-2 data-[state=active]:border-primary-800"
                >
                  {qualityLearning.name}
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="mt-8">
              {_qualityLearnings.map((qualityLearning) => (
                <Tabs.Content
                  key={qualityLearning.name}
                  value={qualityLearning.name}
                >
                  <div className="flex flex-col md:flex-row space-y-6 px-6 md:px-0 md:space-y-0 md:space-x-8">
                    <div>
                      <PageParagraph className="w-[20rem]">
                        {qualityLearning.name} learning is happening when
                        learners:
                      </PageParagraph>
                    </div>
                    <div className="grow">
                      <ul className="list-disc">
                        {qualityLearning.list.map((item) => (
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
