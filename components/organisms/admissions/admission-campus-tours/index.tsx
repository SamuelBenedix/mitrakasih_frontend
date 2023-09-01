import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import Button from "@/components/atoms/button";

interface Props {}

export default function AdmissionCampusTours(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">
          Come meet with us today! We are offering on-campus tours
        </PageTitle>
        <article className="mt-10">
          <PageParagraph>
            Scheduling a time to meet with one of our admission specialists is
            an exciting part of the application process.
          </PageParagraph>
          <ul className="list-disc mt-8">
            <li>
              <PageParagraph>
                This is a time to let us know what is important to you. What
                makes your student special and gets them excited about school?
                We want to know!
              </PageParagraph>
            </li>
            <li>
              <PageParagraph>
                This is a great opportunity for you to get all of your questions
                about JIS, Jakarta, and our community answered. These questions
                help us get to know you so we can personalize your experience in
                joining our community.
              </PageParagraph>
            </li>
          </ul>
        </article>

        <div className="grid grid-cols-2 gap-x-8 mt-8">
          <Button>Schedule A Virtual Meeting Today</Button>
          <Button>Contact JIS Admissions to Book an On-Campus Tour</Button>
        </div>
      </Container>
    </section>
  );
}
