import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AboutAbout from "@/components/organisms/about/about-about";
import AboutIntro from "@/components/organisms/about/about-intro";
import AboutMembership from "@/components/organisms/about/about-membership";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation("About"), name: "About" }}
        header={{
          title: "About Mitra Kasih",
          description:
            "Mitra Kasih is a diverse community of learners representing over 60 nationalities where every student is supported to achieve their very best.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AboutAbout />
        <AboutIntro />
        <AboutMembership />
      </div>
    </ContainerBase>
  );
}
