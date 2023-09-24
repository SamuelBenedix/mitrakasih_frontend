"use client";

import PageTitle from "../../../atoms/heading";
import React from "react";
import Container from "@/components/atoms/container";
import PageParagraph from "../../../atoms/paragraph";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import Button from "@/components/atoms/button";
import Link from "next/link";

interface Props {}

export default function AdmissionGuidelinesPolicy(props: Props) {
  const {} = props;

  return (
    <Container section firstSection size="md">
      <PageTitle>Informasi Pendaftaran</PageTitle>
      <PageTitle className="mt-20" heading="h2">
        Prosedur Pendaftaran
      </PageTitle>

      <article className="mt-10">
        {/* <PageParagraph> */}
          <ul className="list-disc">

          <li>Membeli formulir pendaftaran</li>
          <li>
            Mengisi Formulir Pendaftaran, melengkapi persyaratan dokumen,
            mengembalikan kepada administrasi sekolah
          </li>
          <li>
            Penilaian dan tes masuk nursery, kindergarten, primary,middle, high
            school mengikuti ketentuan sekolah.
          </li>
          <li>
            Sekolah menyampaikan hasil tes dan observasi beserta proses
            administrasi penerimaan siswa baru kepada orang tua.
          </li>
          <li>
            Pelunasan Kewajiban keuangan sesuai nominal dan batas waktu yang
            tercantum.
          </li>
          </ul>
          <PageTitle className="mt-20" heading="h2">
          Dokument yang diperlukan
          </PageTitle>
          <ul className="list-disc">
            <li>Pas foto anak (3x4) 1 lembar</li>
            <li>Foto copy akta kelahiran 1 lembar</li>
            <li>Foto copy KTP orang tua (ayah & ibu) 1 lembar</li>
            <li>Foto copy Kartu Keluarga 1 lembar</li>
            <li>Foto copy KMS(Kartu Imunisasi berlaku untuk PAUD) 1 set</li>
            <li>Foto copy Rapor terakhir</li>
            <li>
              Foto copy ijazah dilegalisir((berlaku untuk Primary, Middle, & High
              School) 1 lembar
            </li>
          </ul>
        {/* </PageParagraph> */}
      </article>

      <PageTitle className="mt-20" heading="h2">
        Daftar Sekarang
      </PageTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <Link target="_blank" className="w-full" href='https://sd.mitrakasih.sch.id/public/register/student'>
        <Button className="w-full" >SD</Button>
        </Link>
        <Link target="_blank" className="w-full" href='https://smp.mitrakasih.sch.id/public/register/student'>
        <Button className="w-full" >SMP</Button>
        </Link>
        <Link target="_blank" className="w-full" href='https://sma.mitrakasih.sch.id/public/register/student'>
        <Button className="w-full" >SMA</Button>
        </Link>
      </div>
    </Container>
  );
}
