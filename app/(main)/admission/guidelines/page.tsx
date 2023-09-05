import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AdmissionIntro from "@/components/organisms/admissions/admission-intro";
import AdmissionCampusTours from "@/components/organisms/admissions/admission-campus-tours";
import AdmissionExploringCampus from "@/components/organisms/admissions/admission-exploring-campus";
import AdmissionGraduates from "@/components/organisms/admissions/admission-graduates";
import AdmissionGuidelinesPolicy from "@/components/organisms/admissions-guidelines/admission-guidelines-policy";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AdmissionGuidelinesPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Admissions"),
          name: "Admissions",
        }}
      />
      <div className="min-h-screen">
        <AdmissionGuidelinesPolicy />
      </div>
    </ContainerBase>
  );
}
