import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import AcademicsMiddleSchoolIntro from "@/components/organisms/academics-middle-school/academics-middle-school-intro";
import AcademicsMiddleSchoolCurriculum from "@/components/organisms/academics-middle-school/academics-middle-school-curriculum";
import AcademicsMiddleSchoolExperience from "@/components/organisms/academics-middle-school/academics-middle-school-experience";
import AcademicsMiddleSchoolCommunity from "@/components/organisms/academics-middle-school/academics-middle-school-community";
import AcademicsMiddleSchoolCampuses from "@/components/organisms/academics-middle-school/academics-middle-school-campuses";

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
            "Ini adalah waktu ketika siswa mulai bercabang, menemukan minat baru, dan membuat hubungan yang bermakna antara dunia nyata dan kecintaan mereka terhadap belajar.",
          image:
            "/images/documentations/FUNWEEK/MIIDLE HIGH/IMG-20230607-WA0046.jpg",
        }}
      />

      <div className="space-y-40">
        <AcademicsMiddleSchoolIntro />
      </div>
    </ContainerBase>
  );
}
