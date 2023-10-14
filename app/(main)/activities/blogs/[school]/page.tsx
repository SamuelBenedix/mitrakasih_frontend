"use client";
import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import ActivitiesBlog from "@/components/organisms/activities/activities-blog";
import { useParams } from "next/navigation";

interface Props {}
/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogSchool(props: Props) {
  const {} = props;
  const params = useParams();
  const school = params.school;

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
          image:
            "https://www.mitrakasih.sch.id/images/DOKUMENTASI/ACTIVITY 2022-2023/P/DSC06010 (Large).JPG",
        }}
      />

      <div className="space-y-40">
        <ActivitiesBlog school={school as "sd" | "smp" | "sma" | undefined} />
      </div>
    </ContainerBase>
  );
}
