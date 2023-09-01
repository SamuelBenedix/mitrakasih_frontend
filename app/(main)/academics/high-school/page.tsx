import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsHighSchoolIntro from "@/components/organisms/academics-high-school/academics-high-school-intro";
import AcademicsHighSchoolCurriculum from "@/components/organisms/academics-high-school/academics-high-school-curriculum";
import AcademicsHighSchoolExperience from "@/components/organisms/academics-high-school/academics-high-school-experience";
import AcademicsHighSchoolCommunity from "@/components/organisms/academics-high-school/academics-high-school-community";
import AcademicsHighSchoolCampuses from "@/components/organisms/academics-high-school/academics-high-school-campuses";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsHighSchoolPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "High School",
          description:
            "Mitra Kasih High School is where students begin to explore how their passions and love of learning translate into life beyond school.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AcademicsHighSchoolIntro />
        <AcademicsHighSchoolCurriculum />
        <AcademicsHighSchoolExperience />
        <AcademicsHighSchoolCommunity />
        <AcademicsHighSchoolCampuses />
      </div>
    </ContainerBase>
  );
}
