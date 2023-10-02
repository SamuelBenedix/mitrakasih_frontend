import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
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
            "SMA Mitra Kasih adalah lembaga pendidikan yang berdedikasi untuk membentuk siswa-siswa unggul dengan nilai-nilai keimanan, karakter, dan keterampilan berwawasan iptek, siap untuk menghadapi tantangan global.",
          image:
            "/images/documentations/activity_2022_2023/H/WhatsApp Image 2023-05-30 at 08.51.22 (1).jpeg",
        }}
      />

      <div className="space-y-40">
        <AcademicsHighSchoolIntro />
      </div>
    </ContainerBase>
  );
}
