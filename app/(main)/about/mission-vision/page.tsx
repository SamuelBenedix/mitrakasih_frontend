import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import AboutMissionVisionIntro from "@/components/organisms/about-mission-vision/about-mission-vision-intro";
import AboutMissionVisionQualityLearners from "@/components/organisms/about-mission-vision/about-mission-vision-quality-learners";
import AboutMissionVisionStrivingList from "@/components/organisms/about-mission-vision/about-mission-vision-striving-list";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutSchoolLeadershipPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation("About"), name: "About" }}
      />

      <div className="space-y-40 min-h-screen">
        <AboutMissionVisionIntro />
        <AboutMissionVisionQualityLearners />
        <AboutMissionVisionStrivingList />
      </div>
    </ContainerBase>
  );
}
