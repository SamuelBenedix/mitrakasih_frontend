import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import CommonLink from "@/components/atoms/common-link";

interface Props {}

export default function ActivitiesAcademySports(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">
          Mitra Kasih Academy & Community Sports
        </PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
            Untuk siswa dan orang tua yang ingin menambahkan kesenangan ekstra
            ke pengalaman mereka, Mitra Kasih Academy dan Community Sports
            menawarkan berbagai kegiatan tambahan yang menarik.
          </PageParagraph>

          <PageParagraph>
            Pendirian program-program ini didorong oleh tujuan untuk menyediakan
            kegiatan akademik, kebugaran, kreatifitas, dan olahraga berkualitas
            tinggi dan menarik yang melampaui kurikulum reguler Sekolah Mitra
            Kasih, semua dalam upaya untuk melayani masyarakat dengan lebih
            baik.
          </PageParagraph>

          <PageParagraph>
            Program-program ini diawasi oleh para tenaga pengajar dan pelatih,
            yang terdiri dari para ahli lokal, yang semuanya memiliki
            pengetahuan khusus di bidangnya masing-masing. Dengan adanya program
            tersebut, ada biaya tambahan untuk setiap program.
          </PageParagraph>

          {/* <footer>
            <CommonLink href="#">Learn more</CommonLink>
          </footer> */}
        </article>
      </Container>
    </section>
  );
}
