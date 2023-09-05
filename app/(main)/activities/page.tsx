import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsMiddleSchoolIntro from "@/components/organisms/academics-middle-school/academics-middle-school-intro";
import AcademicsMiddleSchoolCurriculum from "@/components/organisms/academics-middle-school/academics-middle-school-curriculum";
import AcademicsMiddleSchoolExperience from "@/components/organisms/academics-middle-school/academics-middle-school-experience";
import AcademicsMiddleSchoolCommunity from "@/components/organisms/academics-middle-school/academics-middle-school-community";
import AcademicsMiddleSchoolCampuses from "@/components/organisms/academics-middle-school/academics-middle-school-campuses";
import ActivitiesIntro from "@/components/organisms/activities/activities-intro";
import ActivitiesAcademySports from "@/components/organisms/activities/activities-academy-sports";
import ActivitiesLeadership from "@/components/organisms/activities/activities-leadership";
import ActivitiesAfterSchool from "@/components/organisms/activities/activities-after-school";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Activities"),
          name: "Activities",
        }}
        header={{
          title: "Activities",
          description:
            "Every student is encouraged to join clubs, organizations, teams, and groups to follow their passions, try new things, and further develop their learning at Mitra Kasih.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <ActivitiesIntro />
        <ActivitiesAcademySports />
        <ActivitiesLeadership />
        <ActivitiesAfterSchool />
      </div>
    </ContainerBase>
  );
}
