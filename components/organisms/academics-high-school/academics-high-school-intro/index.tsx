import React from 'react';
import Container from '@/components/atoms/container';
import PageTitle from '../../../atoms/heading';
import PageQuote from '../../../atoms/quote';
import PageParagraph from '../../../atoms/paragraph';

interface Props {}

export default function AcademicsHighSchoolIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h4">High School</PageTitle>
        <PageQuote smallText className="pt-2 pb-6">
          SMA Mitra Kasih adalah lembaga pendidikan yang berdedikasi untuk
          membentuk siswa-siswa unggul dengan nilai-nilai keimanan, karakter,
          dan keterampilan berwawasan iptek, siap untuk menghadapi tantangan
          global.
        </PageQuote>
        <article>
          <PageParagraph className="text-justify" size="lg">
            Sekolah Menengah Atas (High School) di Sekolah Mitra Kasih adalah
            puncak dari pendidikan formal siswa kami. Di sini, kami
            mempersiapkan siswa untuk mencapai potensi mereka yang penuh dan
            siap menghadapi tantangan akademik dan kehidupan di luar sekolah.
            Program High School kami menawarkan kurikulum yang berfokus pada
            pembelajaran yang mendalam dalam berbagai mata pelajaran, serta
            pengembangan karakter yang mengedepankan etika, kepemimpinan, dan
            tanggung jawab sosial. Kami mendorong siswa untuk mengejar minat
            mereka dalam berbagai bidang dan mengembangkan keterampilan yang
            relevan untuk masa depan mereka. Dengan dukungan staf pengajar yang
            berpengalaman, fasilitas yang modern, dan peluang ekstrakurikuler
            yang beragam, kami bertujuan untuk menciptakan lingkungan yang
            mendukung pertumbuhan siswa menjadi individu yang berpengetahuan
            luas, berwawasan, dan siap untuk menghadapi perubahan dunia yang
            cepat.
          </PageParagraph>
        </article>
      </Container>

      <Container size="md" className="mt-20">
        <PageTitle heading="h4">Batasan Umur</PageTitle>
        <PageQuote smallText className="py-3">
          Kelas 10: Harus berusia 15 tahun pada tanggal 31 Desember 2023 dan
          harus merupakan lulusan dari tingkat sebelumnya.
        </PageQuote>
      </Container>
    </section>
  );
}
