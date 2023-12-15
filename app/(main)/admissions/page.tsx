import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import AdmissionIntro from "@/components/organisms/admissions/admission-intro";
import AdmissionCampusTours from "@/components/organisms/admissions/admission-campus-tours";
import AdmissionExploringCampus from "@/components/organisms/admissions/admission-exploring-campus";
import AdmissionGraduates from "@/components/organisms/admissions/admission-graduates";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AdmissionPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Admissions"),
          name: "Admissions",
        }}
        header={{
          image: getRandomImageUrl(),
        }}
      />

      <div className="min-h-screen">
        <AdmissionIntro />
        {/* <AdmissionCampusTours />
        <AdmissionExploringCampus />
        <AdmissionGraduates /> */}
      </div>
    </ContainerBase>
  );
}
