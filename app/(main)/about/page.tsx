import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import AboutAbout from "@/components/organisms/about/about-about";
import AboutIntro from "@/components/organisms/about/about-intro";
import AboutMembership from "@/components/organisms/about/about-membership";
import { _label, _pageDescription, _pageImage, _pageTitle } from "@/data/about";

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
        navBar={{ navigations: getNavigation(_label), name: _label }}
        header={{
          title: _pageTitle,
          description: _pageDescription,
          image: _pageImage,
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
