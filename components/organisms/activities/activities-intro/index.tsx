import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import Quote from "@/components/atoms/quote";

interface Props {}

export default function ActivitiesIntro(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>Activities</PageTitle>

      <Quote>
        Siswa diberi pilihan untuk berpartisipasi dalam ekskul dan kegiatan yang
        berkontribusi untuk memperkaya pengalaman pendidikan mereka di Mitra
        Kasih.
      </Quote>

      <article className="mt-8 space-y-4">
        <PageParagraph>
          Setiap program dirancang tidak hanya untuk mendorong siswa menjadi
          yang terbaik dalam dunia mereka, tetapi juga untuk mengembangkan
          nilai-nilai seperti rasa hormat, semangat kerja sama, inklusivitas,
          dan meningkatkan rasa percaya diri. Ini memberikan jaminan bahwa
          pendidikan anak Anda akan dikelola dengan baik.
        </PageParagraph>
      </article>
    </Container>
  );
}
