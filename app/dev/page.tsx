"use client";

import { notFound } from "next/navigation";
import Slider from "react-slick";

export default function HomePage() {
  if (process.env.NODE_ENV === "production") return notFound();

  // @ts-ignore
  return (
    <section>
      <Slider>
        <div className="w-full h-screen bg-black">Helo</div>
        <div className="w-full h-screen bg-green-500">Helo</div>
        <div className="w-full h-screen bg-blue-500">Helo</div>
        <div className="w-full h-screen bg-purple-500">Helo</div>
      </Slider>
    </section>
  );
}
