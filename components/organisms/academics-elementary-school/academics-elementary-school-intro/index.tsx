import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageQuote from "../../../atoms/quote";
import PageParagraph from "../../../atoms/paragraph";

interface Props {}

export default function AcademicsElementarySchoolIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle>Primary School</PageTitle>
        <PageQuote>
        Sekolah Dasar Mitra Kasih adalah tempat yang penuh dengan keajaiban, kepedulian, eksplorasi, dan pertumbuhan.
        </PageQuote>
        <article>
          <PageParagraph className="text-justify" size="lg">
            Sekolah Dasar (Primary School) di Sekolah Mitra Kasih adalah awal
            dari perjalanan pendidikan formal siswa kami. Dalam lingkungan yang
            peduli dan terfokus pada perkembangan siswa, kami memberikan
            pendidikan yang holistik. Kurikulum kami mencakup mata pelajaran
            akademik yang kuat, pengembangan karakter, dan keterampilan yang
            diperlukan untuk sukses di dunia yang terus berubah. Di Sekolah
            Dasar Mitra Kasih, kami berkomitmen untuk membentuk dasar pendidikan
            yang kuat dan mendukung pertumbuhan intelektual, sosial, dan
            emosional anak-anak kami. Kami percaya bahwa setiap siswa memiliki
            potensi yang luar biasa, dan kami berusaha untuk menggali dan
            mengembangkan bakat dan minat mereka, sehingga mereka siap untuk
            mencapai prestasi tinggi dan menghadapi tantangan masa depan.
          </PageParagraph>
        </article>
      </Container>

      <Container size="md" className="mt-20">
        <PageTitle>Batasan Umur</PageTitle>
        <PageQuote>
          Kelas 1: Harus berusia 6 tahun pada 31 Desember 2023.
        </PageQuote>
        <PageQuote>Kelas 2-6: Harus lulus dari kelas sebelumnya.</PageQuote>
      </Container>
    </section>
  );
}
