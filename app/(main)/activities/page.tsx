import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import ActivitiesIntro from "@/components/organisms/activities/activities-intro";
import ActivitiesAcademySports from "@/components/organisms/activities/activities-academy-sports";
import ActivitiesLeadership from "@/components/organisms/activities/activities-leadership";
import ActivitiesAfterSchool from "@/components/organisms/activities/activities-after-school";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Activities"),
          name: "Activities",
        }}
        header={{
          title: "Activities",
          description:
            "Setiap siswa diberi kesempatan untuk berpartisipasi dalam klub, asosiasi, tim, dan kolektif untuk mengejar minat mereka, mengeksplorasi kegiatan baru, dan meningkatkan pengalaman pendidikan mereka di Mitra Kasih.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <ActivitiesIntro />
        <ActivitiesAcademySports />
        <ActivitiesLeadership />
        {/* <ActivitiesAfterSchool /> */}
      </div>
    </ContainerBase>
  );
}
