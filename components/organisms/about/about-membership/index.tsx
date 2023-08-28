import React from "react";
import Container from "@/components/atoms/container";
import PageHeading from "@/components/atoms/page-heading";
import PageParagraph from "@/components/atoms/page-paragraph";

interface Props {}

export default function AboutMembership(props: Props) {
  const {} = props;

  return (
    <section>
      <Container size="md">
        <PageHeading heading="h2">Accreditation & Memberships</PageHeading>
        <PageParagraph className="mt-10">
          JIS is recognized by both the Indonesian government and several
          internationally certified accreditation bodies. As a legal entity, we
          are a yayasan (nonprofit organization) operating as a Satuan
          Pendidikan Kerjasama (SPK), or Joint Cooperation School.
        </PageParagraph>
      </Container>
    </section>
  );
}
