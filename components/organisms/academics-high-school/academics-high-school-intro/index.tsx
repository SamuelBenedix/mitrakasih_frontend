import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageQuote from "../../../atoms/quote";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsHighSchoolIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Sekolah Menengah Atas</PageTitle>
        <PageQuote>
        SMA Mitra Kasih adalah lembaga pendidikan yang berdedikasi untuk membentuk siswa-siswa unggul dengan nilai-nilai keimanan, karakter, dan keterampilan berwawasan iptek, siap untuk menghadapi tantangan global.
        </PageQuote>
        <article>
          <PageParagraph>
          Tidak butuh waktu lama sebelum kecintaan untuk belajar mulai tumbuh dalam diri setiap siswa. Ketika anak-anak dihormati apa adanya dan perjalanan belajar mereka dihargai, mereka akan berprestasi di sekolah dan di rumah. Ini adalah waktu ketika mereka pertama kali mulai membangun persahabatan mereka sendiri, dan mulai mengembangkan hasrat dan minat - dan individualitas dan kepribadian mereka bersinar.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
