import { useParams } from "next/navigation";
import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import ActivitiesDetail from "@/components/organisms/activities/activities-detail";
import { BlogDetail, Blogs } from "@/data/api";
import { Blog, BlogData } from "@/types/app";

interface Props {}

interface StaticParams {
  paths: {
    params: {
      school: string;
      id: string;
    };
  }[];
  fallback: boolean;
}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function ActivitiesBlogs(props: Props) {
  const {} = props;
  const params = useParams();
  const { id, school } = params;

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
            "/images/DOKUMENTASI/ACTIVITY 2022-2023/P/DSC06010 (Large).JPG",
        }}
      />

      <div className="space-y-40">
        <ActivitiesDetail
          school={school as "sd" | "smp" | "sma"}
          id={id as string}
        />
      </div>
    </ContainerBase>
  );
}

export const generateStaticParams = async (): Promise<StaticParams> => {
  const blogs: BlogData[] = await Blogs("sd");
  console.log("blogs");
  console.log(blogs);
  const paths = blogs.map((item) => ({
    params: {
      school: "sd", // Ganti dengan nilai yang sesuai
      id: item.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
