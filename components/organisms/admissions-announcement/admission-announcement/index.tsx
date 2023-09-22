"use client";

import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import Button from "@/components/atoms/button";
import { _pageTitle } from "@/data/admissions_announcement";

interface Props {}

export default function AdmissionAnnouncement(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>{_pageTitle}</PageTitle>

      <Accordion type="multiple" className="mt-8">
        {/* ==================== Grade Placement Policies ==================== */}
        <AccordionItem value="1" className="w-full">
          <AccordionTrigger>Early Years</AccordionTrigger>
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
          <AccordionTrigger>Elementary School</AccordionTrigger>
          <AccordionContent>
            <PageParagraph>
              Yes. It adheres to the WAI-ARIA design pattern.
            </PageParagraph>
          </AccordionContent>
        </AccordionItem>

        {/* ==================== Elementary Campus Placement Policy ==================== */}
        <AccordionItem value="3" className="w-full">
          <AccordionTrigger>Middle School</AccordionTrigger>
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
          <AccordionTrigger>High School</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Button>INQUIRE</Button>
        <Button>APPLY NOW</Button>
      </div>
    </Container>
  );
}
