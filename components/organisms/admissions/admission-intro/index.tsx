import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import PageQuote from "../../../atoms/quote";

interface Props {}

export default function AdmissionIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Admissions</PageTitle>
        <article className="mt-10">
          <PageParagraph>
            Faktor apa yang paling penting bagi Anda ketika memilih sekolah
            untuk anak-anak Anda?
          </PageParagraph>
          <PageParagraph className="mt-4">
            Apakah Anda mencari kurikulum yang menuntut dan terstruktur dengan
            pengakuan internasional? Apakah Anda ingin siswa Anda memiliki
            kesempatan untuk berpartisipasi dalam kegiatan olahraga, seni
            kreatif, dan pelayanan masyarakat? Apakah lingkungan belajar yang
            mendukung dan menghargai keberagaman penting bagi Anda? Atau
            mungkinkah Anda memiliki persyaratan khusus dan unik yang
            disesuaikan dengan kondisi pribadi Anda?
          </PageParagraph>
          <PageQuote>
            Mari kita mulai perjalanan bersama untuk mengetahui bagaimana Mitra
            Kasih dapat memenuhi kebutuhan Anda dan mempersiapkan anak Anda
            untuk menjadi \'yang TERBAIK bagi dunia\'.
          </PageQuote>
        </article>
      </Container>
    </section>
  );
}
