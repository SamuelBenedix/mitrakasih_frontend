import Container from "@/components/atoms/container";
import React from "react";
import Link from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export default function HomeCollege() {
  return (
    <section>
      <Container>
        <div className="mt-40">
          <h2 className="text-2xl md:text-5xl col-span-2 font-bold text-primary-800 grow">
            Kemana Siswa Mitra Kasih Pergi
          </h2>
          <div className="md:ml-20 max-w-xl text-lg mt-10">
            <p className="mb-8">
              99% dari lulusan Mitra Kasih memilih untuk masuk ke Universitas
              setelah lulus. Siswa diberdayakan untuk menemukan Universitas yang
              tepat untuk mereka. Siswa Mitra Kasih dapat ditemukan di
              universitas-universitas besar dan kecil di seluruh dunia.
            </p>
            <Link
              href="#"
              className="font-medium flex space-x-2 items-center text-primary-800"
            >
              <span>See the full list of university acceptances</span>
              <IconArrowNarrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
