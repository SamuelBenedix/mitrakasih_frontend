import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
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
          title: "Primary School",
          description:
            "Primary School adalah masa di mana para siswa mulai membangun keingintahuan dan kecintaan mereka untuk belajar.",
          image:
            "https://www.mitrakasih.sch.id/images/documentations/classes/PRIMARY/IMG-20220607-WA0052.jpg",
        }}
      />

      <div className="space-y-40">
        <AcademicsElementarySchoolIntro />
      </div>
    </ContainerBase>
  );
}
