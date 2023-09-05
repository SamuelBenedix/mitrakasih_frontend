"use client";

import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import { IconPlus } from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import Button from "@/components/atoms/button";

interface Props {}

export default function AdmissionGuidelinesPolicy(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Admission Guidelines</PageTitle>
        <PageTitle className="mt-20" heading="h2">
          Admission Policy
        </PageTitle>

        <article className="mt-10">
          <PageParagraph>
            Jakarta Intercultural School welcomes learners who can benefit from
            and contribute to a high-quality elementary to secondary university
            preparatory curriculum.
          </PageParagraph>
        </article>

        <Accordion type="multiple" className="mt-8">
          {/* ==================== Grade Placement Policies ==================== */}
          <AccordionItem value="1" className="w-full">
            <AccordionTrigger>Grade Placement Policies</AccordionTrigger>
            <AccordionContent>
              <article className="grid grid-cols-2 gap-12">
                <div>
                  <PageParagraph>
                    Please check the appropriate Mitra Kasih grade level by
                    downloading the
                  </PageParagraph>
                </div>
                <div></div>
              </article>
            </AccordionContent>
          </AccordionItem>

          {/* ==================== Early Years Policy ==================== */}
          <AccordionItem value="2" className="w-full">
            <AccordionTrigger>Early Years Policy</AccordionTrigger>
            <AccordionContent>
              <PageParagraph>
                Yes. It adheres to the WAI-ARIA design pattern.
              </PageParagraph>
            </AccordionContent>
          </AccordionItem>

          {/* ==================== Elementary Campus Placement Policy ==================== */}
          <AccordionItem value="3" className="w-full">
            <AccordionTrigger>
              Elementary Campus Placement Policy
            </AccordionTrigger>
            <AccordionContent>
              <article className="space-y-8">
                <PageParagraph>
                  Mitra Kasih has two Elementary campuses: Pattimura (PEL) and
                  Pondok Indah (PIE). PEL is closer to embassies and the Central
                  Business District while PIE is in a residential area in South
                  Jakarta. Travel time between the campuses is approximately 20
                  minutes.
                </PageParagraph>
                <PageParagraph>
                  Admission priority is given to applicants based on the area of
                  residence. In addition, if a grade level or student support
                  service has reached capacity at the student&apos;s preferred
                  campus, the student will be assigned to the alternate campus.
                  The school reserves the right to determine these placements.
                </PageParagraph>
              </article>
            </AccordionContent>
          </AccordionItem>

          {/* ==================== High School Admission Policies ==================== */}
          <AccordionItem value="4" className="w-full">
            <AccordionTrigger>High School Admission Policies</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          {/* ==================== Indonesian Ministry of Education Course Requirements ==================== */}
          <AccordionItem value="5" className="w-full">
            <AccordionTrigger>
              Indonesian Ministry of Education Course Requirements
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          {/* ==================== Inclusion Statement ==================== */}
          <AccordionItem value="6" className="w-full">
            <AccordionTrigger>Inclusion Statement</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>

          {/* ==================== Admissions Priority Policy ==================== */}
          <AccordionItem value="7" className="w-full">
            <AccordionTrigger>Admissions Priority Policy</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid grid-cols-2 gap-x-8 mt-8">
          <Button>INQUIRE</Button>
          <Button>APPLY NOW</Button>
        </div>
      </Container>
    </section>
  );
}
