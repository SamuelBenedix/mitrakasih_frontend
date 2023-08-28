import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AboutAbout from "@/components/organisms/about/about-about";
import AboutIntro from "@/components/organisms/about/about-intro";
import AboutMembership from "@/components/organisms/about/about-membership";
import AboutCampusesIntro from "@/components/organisms/about-campuses/about-campuses-intro";
import AboutCampusesLibraries from "@/components/organisms/about-campuses/about-campuses-libraries";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutCampusPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation("About"), name: "About" }}
        header={{
          title: "Our Campuses",
          description:
            "Our campuses provide students a safe place to learn, play, engage with their surroundings, and explore their interests.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AboutCampusesIntro />
        <AboutCampusesLibraries />
      </div>
    </ContainerBase>
  );
}
