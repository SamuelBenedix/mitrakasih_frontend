import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";
import { _qualityLearners } from "@/data/about_mission_vision";

interface Props {}

export default function ActivitiesAfterSchool(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">After School Activities</PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            Most Mitra Kasih students stay on campus and participate in one of
            the many activities that happen at school. After-School Activities
            (ASA) at Mitra Kasih are geared toward promoting socialization,
            confidence, life skills, teamwork, strategic thinking, social
            service, and fun.
          </PageParagraph>

          <PageParagraph>
            Students from Elementary School to High School have the opportunity
            to take part in an ASA. These activities are age appropriate and can
            range from joining a recreational soccer league and learning a new
            instrument to being on the Environmental Stewardship Council and
            representing the school on the IASAS debate stage.
          </PageParagraph>

          <PageParagraph>
            Here are some examples of what After School Activities may look like
            at each division.
          </PageParagraph>
        </article>

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
