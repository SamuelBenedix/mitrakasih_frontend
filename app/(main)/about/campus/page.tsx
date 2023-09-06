import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
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
          title: "Our School",
          description:
            "Our campus provide students a safe place to learn, play, engage with their surroundings, and explore their interests.",
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
