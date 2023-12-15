import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function ActivitiesLeadership(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Student Leadership</PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            Sementara semua siswa di Mitra Kasih secara alami mengembangkan
            tanggung jawab dan kualitas kepemimpinan melalui pengalaman sekolah
            mereka sehari-hari, formalisasi peran kepemimpinan menjadi lebih
            menonjol ketika mereka maju melalui sekolah. Mitra Kasih secara
            aktif mendorong keterlibatan siswa dalam berbagai kegiatan,
            mendorong mereka untuk terus menantang diri mereka sendiri dan
            secara aktif mencari peluang kepemimpinan.
          </PageParagraph>

          <PageParagraph>
            Kepemimpinan siswa dapat diwujudkan dalam berbagai cara, mulai dari
            mengorganisir acara di Panggung Bali Sekolah Menengah Pertama hingga
            mencalonkan diri sebagai anggota OSIS di Sekolah Menengah Atas. Di
            Mitra Kasih, kami menyadari pentingnya memberdayakan siswa untuk
            menjadi pemimpin masa depan.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
