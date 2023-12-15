import Container from '@/components/atoms/container';
import React from 'react';

export default function HomeCollege() {
  return (
    <section>
      <Container>
        <div className="mt-40">
          <h2 className="text-2xl md:text-5xl col-span-2 font-bold text-primary-800 grow">
            Kemana Siswa Mitra Kasih Pergi
          </h2>
          <div className="md:ml-20 max-w-xl text-lg mt-10">
            <p>
              99% dari lulusan Mitra Kasih memilih untuk masuk ke Universitas
              setelah lulus. Siswa diberdayakan untuk menemukan Universitas yang
              tepat untuk mereka. Siswa Mitra Kasih dapat ditemukan di
              universitas-universitas besar dan kecil di seluruh dunia.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
