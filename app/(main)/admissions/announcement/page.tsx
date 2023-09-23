import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import AdmissionAnnouncement from "@/components/organisms/admissions-announcement/admission-announcement";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AdmissionAnnouncementPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Announcement"),
          name: "Announcement",
        }}
      />

      <div className="min-h-screen">
        <AdmissionAnnouncement />
      </div>
    </ContainerBase>
  );
}
