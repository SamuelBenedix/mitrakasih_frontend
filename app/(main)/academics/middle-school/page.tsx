import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsMiddleSchoolIntro from "@/components/organisms/academics-high-school/academics-middle-school-intro";
import AcademicsMiddleSchoolCurriculum from "@/components/organisms/academics-high-school/academics-middle-school-curriculum";
import AcademicsMiddleSchoolExperience from "@/components/organisms/academics-high-school/academics-middle-school-experience";
import AcademicsMiddleSchoolCommunity from "@/components/organisms/academics-high-school/academics-middle-school-community";
import AcademicsMiddleSchoolCampuses from "@/components/organisms/academics-high-school/academics-middle-school-campuses";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsMiddleSchoolPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Middle School",
          description:
            "This is the time when students start to branch out, discover new interests, and make meaningful connections between the real world and their love of learning.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AcademicsMiddleSchoolIntro />
        <AcademicsMiddleSchoolCurriculum />
        <AcademicsMiddleSchoolExperience />
        <AcademicsMiddleSchoolCommunity />
        <AcademicsMiddleSchoolCampuses />
      </div>
    </ContainerBase>
  );
}
