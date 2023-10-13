import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import ActivitiesIntro from "@/components/organisms/activities/activities-intro";
import ActivitiesAcademySports from "@/components/organisms/activities/activities-academy-sports";
import ActivitiesLeadership from "@/components/organisms/activities/activities-leadership";
import ActivitiesAfterSchool from "@/components/organisms/activities/activities-after-school";
import Button from "@/components/atoms/button";
import ActivitiesBlog from "@/components/organisms/activities/activities-blog";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogs(props: Props) {
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
            "Every student is encouraged to join clubs, organizations, teams, and groups to follow their passions, try new things, and further develop their learning at Mitra Kasih.",
          image:
            "https://www.mitrakasih.sch.id/images/DOKUMENTASI/ACTIVITY 2022-2023/H/DSC00913 (Large).JPG",
        }}
      />

      <div className="space-y-40">
        <ActivitiesBlog school="sma" />
      </div>
    </ContainerBase>
  );
}
