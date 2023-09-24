import React from "react";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import { app } from "@/config/app";

interface Props {}

export default function AcademicsElementarySchoolExperience(props: Props) {
  const {} = props;

  return (
    <section className="mt-32">
      <Container size="md">
        <PageTitle heading="h2">Student and Family Experience</PageTitle>

        <ul className="list-disc px-4 md:px-0 space-y-2 mt-8">
          <li>
            <PageParagraph>
            Kami menghargai hubungan antara rumah dan sekolah. Kami melihat Anda, orang tua {app.title}, sebagai mitra dalam pendidikan siswa Anda. Masukan Anda sangat berharga dan kami bekerja sama untuk mendukung pembelajaran siswa Anda.
            </PageParagraph>
          </li>

          <li>
            <PageParagraph>
            Staf pengajar kami yang berkualifikasi tinggi menjaga kesejahteraan siswa dan memastikan pengalaman pertama mereka jauh dari rumah aman dan nyaman.
            </PageParagraph>
          </li>

          <li>
            <PageParagraph>
            Setiap anak adalah siswa yang unik, jadi kami mempersonalisasi pengalaman belajar pengalaman belajar untuk menyesuaikan kebutuhan mereka.
            </PageParagraph>
          </li>
        </ul>

        <PageTitle heading="h3" className="mt-10">
        Setiap Anak Itu Unik
        </PageTitle>

        <article className="mt-8 space-y-4">
          <PageParagraph>
          Setiap anak itu unik dan merupakan pembelajar yang kompeten dengan keingintahuan tentang dunia. Adalah peran kita sebagai pendidik untuk menyediakan lingkungan yang aman dan mengayomi bagi mereka untuk mengeksplorasi keingintahuan tersebut dan mulai mengembangkan kecintaan belajar yang akan mereka kembangkan sepanjang hidup mereka. mereka selama sisa hidup mereka.
          </PageParagraph>

          <PageParagraph>
          Anak-anak belajar paling baik melalui pengalaman langsung dengan dunia daripada melalui praktik-praktik akademis yang abstrak dan formal. SMA {app.title} didukung oleh pendidik yang berkualitas dan ahli yang membimbing anak-anak dalam pengetahuan dan pengembangan konten, keterampilan, dan sikap mereka, mempersiapkan mereka untuk masuk ke Primary School.
          </PageParagraph>
        </article>
      </Container>
    </section>
  );
}
