import React from 'react';
import Container from '@/components/atoms/container';
import PageTitle from '../../../atoms/heading';
import PageQuote from '../../../atoms/quote';
import PageParagraph from '../../../atoms/paragraph';

interface Props {}

export default function AcademicsEarlyYearsIntro(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container section firstSection size="md">
        <PageTitle heading="h4">Nursery Kindergarten</PageTitle>
        <PageQuote smallText className="pt-2 pb-6">
          Program Taman Kanak-kanak Mitra Kasih adalah sebuah suasana penuh
          keajaiban, kepedulian, eksplorasi, dan pertumbuhan.
        </PageQuote>
        <article>
          <PageParagraph className="text-justify" size="lg">
            Nursery Kindergarten di Sekolah Mitra Kasih adalah tahap pendidikan
            awal yang dirancang khusus untuk anak-anak usia dini. Kami
            menyediakan lingkungan yang hangat, aman, dan mendukung di mana
            anak-anak dapat belajar melalui bermain, berinteraksi, dan
            eksplorasi. Program Nursery Kindergarten kami bertujuan untuk
            memperkenalkan anak-anak pada konsep pendidikan, mengembangkan
            keterampilan sosial, emosional, dan kognitif mereka, serta membangun
            fondasi kuat untuk masa depan mereka dalam pendidikan formal. Dengan
            guru yang berpengalaman dan peduli, kami berusaha menciptakan
            pengalaman pendidikan yang positif dan mempersiapkan anak-anak untuk
            perjalanan pendidikan mereka yang menyenangkan dan bermakna.
          </PageParagraph>
        </article>
      </Container>
      <Container size="md" className="mt-20">
        <PageTitle heading="h4">Batasan Umur</PageTitle>
        <PageQuote smallText className="py-3">
          NK 1: Harus berusia 3 tahun pada 31 Desember 2023 dan harus sudah bisa
          menggunakan toilet.
        </PageQuote>
        <PageQuote smallText className="py-3">
          NK 2 Harus berusia 4 tahun pada 31 Desember 2023 dan harus sudah
          terlatih menggunakan toilet.
        </PageQuote>
        <PageQuote smallText className="py-3">
          NK 3: Harus berusia 5 tahun pada 31 Desember 2023 dan harus terlatih
          menggunakan toilet.
        </PageQuote>
      </Container>
    </section>
  );
}
