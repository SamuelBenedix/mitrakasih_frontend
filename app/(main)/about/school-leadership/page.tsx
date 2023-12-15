import ContainerBase from '@/components/atoms/container-base';
import PageHero from '@/components/organisms/layout/page-hero';
import { getNavigation } from '@/lib/utils/utils';
import Container from '@/components/atoms/container';
import PageTitle from '@/components/atoms/heading';
import PageParagraph from '@/components/atoms/paragraph';
import React from 'react';

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutMissionVisionPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation('About'), name: 'About' }}
        header={{
          title: 'Sambutan Kepala Sekolah',
          description: '   ',
          image:
            'https://www.mitrakasih.sch.id/images/DOKUMENTASI/UPACARA/UPACARA-17 AGUSTUS 2023/DSC03507 (Large).JPG',
        }}
      />

      <div className="space-y-40 min-h-screen">
        <Container section firstSection size="md">
          <PageTitle heading="h4" className="py-15">
            Sambutan Kepala Sekolah
          </PageTitle>
          <article className="mt-20">
            <PageParagraph size="lg" className="mt-15 text-justify">
              Salam Hormat kepada Seluruh Warga Sekolah Mitra Kasih,
            </PageParagraph>

            <PageParagraph size="lg" className="mt-7 text-justify">
              Selamat datang di Mitra Kasih, sebuah lembaga pendidikan yang
              berkomitmen untuk menciptakan generasi muda yang unggul dan
              berprestasi. Saya merasa sangat senang dan bangga memimpin sekolah
              ini, tempat di mana kami berusaha keras untuk menciptakan
              lingkungan belajar yang inspiratif dan mendukung perkembangan
              penuh potensi setiap siswa.
            </PageParagraph>
            <PageParagraph size="lg" className="mt-7 text-justify">
              Di Mitra Kasih, kami memiliki visi yang kuat untuk membentuk
              siswa-siswa yang memiliki nilai-nilai keimanan, karakter, dan
              berbudi pekerti luhur. Kami juga menekankan semangat entrepreneur
              dan berwawasan lingkungan hidup, sehingga siswa kami siap untuk
              menghadapi tantangan dunia yang terus berkembang.
            </PageParagraph>
            <PageParagraph size="lg" className="mt-7 text-justify">
              Kami sangat memahami bahwa pendidikan adalah kunci kesuksesan masa
              depan, dan kami berkomitmen untuk memberikan pendidikan
              berkualitas tinggi yang akan membekali siswa kami dengan
              pengetahuan, keterampilan, dan nilai-nilai yang diperlukan untuk
              menjadi pemimpin masa depan. Kami juga menawarkan beragam program
              ekstrakurikuler dan peluang pengembangan diri untuk mendukung
              perkembangan siswa di luar kelas.
            </PageParagraph>
            <PageParagraph size="lg" className="mt-7 text-justify">
              Terima kasih kepada semua orangtua dan siswa yang telah
              mempercayakan pendidikan mereka kepada kami. Kami bersama-sama
              sebagai satu keluarga sekolah, dan saya yakin bersama-sama kita
              akan mencapai prestasi yang luar biasa.
            </PageParagraph>
            <PageParagraph size="lg" className="mt-7 text-justify">
              Selamat belajar dan berkembang di Mitra Kasih. Mari bersama-sama
              menjalani perjalanan pendidikan yang bermakna dan inspiratif.
            </PageParagraph>
            <PageParagraph size="lg" className="mt-7 text-justify">
              Salam hormat,
            </PageParagraph>
          </article>
        </Container>
      </div>
    </ContainerBase>
  );
}
