import ContainerBase from "@/components/atoms/container-base";
import HomeHero from "@/components/organisms/home/hero";
import HomeAbout from "@/components/organisms/home/about";
import HomeGallery from "@/components/organisms/home/gallery";
import HomeForm from "@/components/organisms/home/form";

export default function HomePage() {
  return (
    <ContainerBase>
      <HomeHero />
      <HomeAbout />
      <HomeGallery />
      <HomeForm />
    </ContainerBase>
  );
}
