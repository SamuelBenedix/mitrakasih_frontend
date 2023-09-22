import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsElementarySchoolCurriculum from "@/components/organisms/academics-elementary-school/academics-elementary-school-curriculum";
import AcademicsElementarySchoolExperience from "@/components/organisms/academics-elementary-school/academics-elementary-school-experience";
import AcademicsElementarySchoolCommunity from "@/components/organisms/academics-elementary-school/academics-elementary-school-community";
import AcademicsElementarySchoolCampuses from "@/components/organisms/academics-elementary-school/academics-elementary-school-campuses";
import AcademicsElementarySchoolIntro from "@/components/organisms/academics-elementary-school/academics-elementary-school-intro";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsElementarySchoolPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Elementary School",
          description:
            "Elementary school is when students to start to build on their curiosities and love of learning.",
          image: '/images/DOKUMENTASI/01 DIKELAS/PRIMARY/IMG-20220607-WA0052.jpg',
        }}
      />

      <div className="space-y-40">
        <AcademicsElementarySchoolIntro />
        <AcademicsElementarySchoolCurriculum />
        <AcademicsElementarySchoolExperience />
        <AcademicsElementarySchoolCommunity />
        <AcademicsElementarySchoolCampuses />
      </div>
    </ContainerBase>
  );
}
