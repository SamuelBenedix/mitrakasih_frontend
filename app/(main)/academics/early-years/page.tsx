import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsEarlyYearsIntro from "@/components/organisms/academics-early-years/academics-early-years-intro";
import AcademicsEarlyYearsCurriculum from "@/components/organisms/academics-early-years/academics-early-years-curriculum";
import AcademicsEarlyYearsExperience from "@/components/organisms/academics-early-years/academics-early-years-experience";
import AcademicsEarlyYearsCommunity from "@/components/organisms/academics-early-years/academics-early-years-community";
import AcademicsEarlyYearsCampuses from "@/components/organisms/academics-early-years/academics-early-years-campuses";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsEarlyYearsPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Early Years",
          description:
            "The Mitra Kasih Early Years program was designed to bring out the inquirer in each and every student and introduce them to a love of learning.",
          image: '/images/DOKUMENTASI/01 ASEMBLY/DSC00112 (Large).JPG',
        }}
      />

      <div className="space-y-40">
        <AcademicsEarlyYearsIntro />
        <AcademicsEarlyYearsCurriculum />
        <AcademicsEarlyYearsExperience />
        <AcademicsEarlyYearsCommunity />
        <AcademicsEarlyYearsCampuses />
      </div>
    </ContainerBase>
  );
}
