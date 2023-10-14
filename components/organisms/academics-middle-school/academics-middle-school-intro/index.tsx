import React from 'react';
import Container from '@/components/atoms/container';
import PageTitle from '../../../atoms/heading';
import PageQuote from '../../../atoms/quote';
import PageParagraph from '../../../atoms/paragraph';

interface Props {}

export default function AcademicsMiddleSchoolIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h4">Middle School</PageTitle>
        <PageQuote smallText className="pt-2 pb-6">
          Ini adalah waktu ketika siswa mulai bercabang, menemukan minat baru,
          dan membuat hubungan yang bermakna antara dunia nyata dan kecintaan
          mereka terhadap belajar.
        </PageQuote>
        <article>
          <PageParagraph className="text-justify" size="lg">
            Sekolah Menengah Pertama (Middle School) di Sekolah Mitra Kasih
            adalah tahap penting dalam perjalanan pendidikan siswa kami. Di
            sini, kami memberikan lingkungan yang mendukung pertumbuhan dan
            perkembangan mereka, serta mempersiapkan mereka untuk menghadapi
            tantangan pendidikan yang lebih tinggi. Program Middle School kami
            mengintegrasikan mata pelajaran akademik yang kuat dengan
            pembangunan karakter yang berfokus pada integritas, tanggung jawab,
            dan kemandirian. Kami mendorong siswa untuk mengembangkan
            keterampilan berpikir kritis, kolaborasi, dan berkomunikasi dengan
            baik. Dengan staf pengajar yang berpengalaman dan fasilitas modern,
            kami berusaha menciptakan pengalaman pembelajaran yang inspiratif
            dan menantang bagi siswa kami, sehingga mereka dapat tumbuh menjadi
            individu yang siap menghadapi masa depan dengan keyakinan dan
            pengetahuan yang kuat.
          </PageParagraph>
        </article>
      </Container>

      <Container size="md" className="mt-20">
        <PageTitle heading="h4">Batasan Umur</PageTitle>
        <PageQuote smallText className="py-3">
          Kelas 7: Harus berusia 12 tahun pada tanggal 31 Desember 2023 dan
          merupakan lulusan dari jenjang sebelumnya.
        </PageQuote>
        <PageQuote smallText className="py-3">
          Kelas 8: Harus berusia 13 tahun pada tanggal 31 Desember 2023 dan
          merupakan lulusan dari jenjang sebelumnya.
        </PageQuote>
      </Container>
    </section>
  );
}
