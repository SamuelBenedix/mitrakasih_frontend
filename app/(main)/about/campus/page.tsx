import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import AboutCampusesIntro from "@/components/organisms/about-campuses/about-campuses-intro";
import AboutCampusesLibraries from "@/components/organisms/about-campuses/about-campuses-libraries";
import {
  _label,
  _pageDescription,
  _pageImage,
  _pageTitle,
} from "@/data/about_campuses";

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
        navBar={{ navigations: getNavigation(_label), name: _label }}
        header={{
          title: _pageTitle,
          description: _pageDescription,
          image: _pageImage,
        }}
      />

      <div className="space-y-40">
        <AboutCampusesIntro />
        {/* <AboutCampusesLibraries /> */}
      </div>
    </ContainerBase>
  );
}
