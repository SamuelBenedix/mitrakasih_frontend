import ContainerBase from "@/components/atoms/container-base";
import HomeHero from "@/components/organisms/home/hero";
import HomeAbout from "@/components/organisms/home/about";
import HomeGallery from "@/components/organisms/home/gallery";
import HomeForm from "@/components/organisms/home/form";
import HomeGallery2 from "@/components/organisms/home/gallery-2";
import HomeSection3 from "@/components/organisms/home/section-3";
import HomeGallery3 from "@/components/organisms/home/gallery-3";
import React from "react";
import HomeCarousel from "@/components/organisms/home/carousel";

export default function HomePage() {
  return (
    <ContainerBase>
      <HomeHero />
      <HomeAbout />
      <HomeGallery />
      <HomeCarousel />
      <HomeGallery2 />
      <HomeSection3 />
      <HomeForm />
      <HomeGallery3 />
    </ContainerBase>
  );
}
