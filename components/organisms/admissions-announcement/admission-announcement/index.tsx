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


      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <Button>INQUIRE</Button>
        <Button>APPLY NOW</Button>
      </div> */}
    </Container>
  );
}
