"use client";

import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import { _qualityLearners } from "@/data/about_mission_vision";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";
import Paragraphs from "../../../molecules/paragraphs";

interface Props {}

export default function AcademicsEarlyYearsCurriculum(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Our Curriculum</PageTitle>
        <Paragraphs
          paragraphs={[
            "We recognize that the Nursery Kindergarten and Kindergarten Period (ages 3-6)\n" +
              "            as pivotal in building a foundation for the educational life of our\n" +
              "            students. We center our curriculum around an inquiry approach to\n" +
              "            learning that is well-researched and based on best teaching\n" +
              "            practices from around the world. Here is where it all starts —\n" +
              "            growing curiosity and the love of learning!",
          ]}
        ></Paragraphs>

        <div className="mt-10">
          <Tabs defaultValue={_qualityLearners[0].name}>
            <TabsList>
              {_qualityLearners.map((quality_learning) => (
                <TabsTrigger
                  key={quality_learning.name}
                  value={quality_learning.name}
                >
                  {quality_learning.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {_qualityLearners.map((quality_learning) => (
              <TabsContent
                key={quality_learning.name}
                value={quality_learning.name}
              >
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 px-6 md:px-0 md:space-x-8">
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
