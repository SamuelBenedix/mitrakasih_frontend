import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";
import AcademicsIntro from "@/components/organisms/academics/academics-intro";
import AcademicsReasons from "@/components/organisms/academics/academics-reasons";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Academics",
          description:
            "From Early Years to High School, Mitra Kasih offers a premier learning environment that is accredited by the Western Association of Schools and Colleges, and the Council of International Schools.",
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AcademicsIntro />
        <AcademicsReasons />
      </div>
    </ContainerBase>
  );
}
