import React from "react";
import Container from "@/components/atoms/container";
import Heading from "@/components/atoms/heading";
import Paragraph from "@/components/atoms/paragraph";
import Paragraphs from "@/components/atoms/paragraphs";

interface Props {}

export default function AboutAbout(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <Heading>Tentang Mitra Kasih</Heading>

        <Paragraphs>
          <Paragraph>
          Sekolah Mitra Kasih adalah lembaga pendidikan yang berkomitmen untuk memberikan standar pendidikan internasional yang tinggi dengan menghadirkan tenaga pengajar terbaik. Kami didedikasikan untuk memberikan kualitas pendidikan terbaik kepada setiap siswa kami, dengan tujuan membekali mereka untuk menghadapi perkembangan dunia yang cepat.


          </Paragraph>

          <Paragraph>
            Kami percaya bahwa setiap siswa adalah individu yang unik dan
            berharga yang memiliki potensi untuk mencapai yang terbaik.
          </Paragraph>

          <Paragraph>
          Kami berkomitmen untuk menciptakan lingkungan pendidikan yang mendukung perkembangan siswa secara holistik, sehingga mereka dapat menjadi pemimpin masa depan yang siap menghadapi tantangan global. Dengan semangat ini, kami menyambut semua siswa untuk bergabung dengan kami dalam perjalanan pendidikan yang inspiratif.
          </Paragraph>
        </Paragraphs>
      </Container>
    </section>
  );
}
