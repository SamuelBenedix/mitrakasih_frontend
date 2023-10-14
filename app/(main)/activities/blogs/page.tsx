import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import ActivitiesBlog from "@/components/organisms/activities/activities-blog";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogsView(props: Props) {
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
        <ActivitiesBlog />
      </div>
    </ContainerBase>
  );
}
