import React from "react";
import Container from "@/components/atoms/container";
import Figure from "@/components/molecules/figure";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";

interface Props {}

export default function AboutMembership(props: Props) {
  const {} = props;

  return (
    <section>
      <Container size="md">
        <Heading heading="h2">Accreditation & Memberships</Heading>
        <Paragraph>
          Mitra Kasih is recognized by both the Indonesian government and several internationally certified accreditation bodies. As a legal entity, we are a yayasan (nonprofit) operating as a Satuan Pendidikan Kerjasama (SPK), or Joint Cooperation School.
        </Paragraph>

        <div className="grid grid-cols-2 mt-20 gap-10">
          <Figure
            title="Leadership"
            image={'/images/DOKUMENTASI/UPACARA/UPACARA-17 AGUSTUS 2023/DSC03518 (Large).JPG'}
            description="The leadership team at Mitra Kasih are educators first and foremost and lead the school in innovation and learning. With a principal and vice principal at each campus, we are able to make a large community feel small."
            size="sm"
            linkLabel="Meet Our Leadership Team"
          />

          <Figure
            title="Apple Distinguished School"
            image={'/images/Foto Gedung/MH/DSC01867 (Large).JPG'}
            description="We are pleased to have been recognized as an Apple distinguished school for the last 10 years. Our Apple one-to-one program allows students to personalize and creatively express their learning."
            linkLabel="Read More"
            size="sm"
          />
        </div>
      </Container>
    </section>
  );
}
