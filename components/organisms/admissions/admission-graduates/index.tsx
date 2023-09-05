import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import Figure from "@/components/molecules/figure";
import { exploring_campus, graduates } from "@/dev/dummies/admissions";
import Button from "@/components/atoms/button";

interface Props {}

export default function AdmissionGraduates(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Where Mitra Kasih Students Go</PageTitle>
        <div className="grid grid-cols-2 gap-8 mt-8">
          {graduates.map((item) => (
            <Figure key={item.title} title={item.title} image={item.image} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-8 mt-8">
          <Button>INQUIRE</Button>
          <Button>APPLY NOW</Button>
        </div>
      </Container>
    </section>
  );
}
