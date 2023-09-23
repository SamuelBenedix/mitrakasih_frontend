import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
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
