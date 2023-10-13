"use client";
import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import ActivitiesBlog from "@/components/organisms/activities/activities-blog";
import { useParams } from "next/navigation";

interface Props {}

// interface StaticParams {
//   paths: {
//     params: {
//       school: string;
//     };
//   };
//   fallback: boolean;
// }
/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogs(props: Props) {
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
            "Every student is encouraged to join clubs, organizations, teams, and groups to follow their passions, try new things, and further develop their learning at Mitra Kasih.",
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

// interface StaticParams {
//   paths: {
//     params: {
//       school: string;
//     };
//   };
//   fallback: boolean;
// }
// export const generateStaticParams = () => {
//   const data_ = [{ school: "sd" }];

//   return data_;
// };
