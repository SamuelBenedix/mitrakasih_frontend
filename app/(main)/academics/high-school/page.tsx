import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import { getRandomImageUrl } from "@/dev/getRandomImageUrl";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AcademicsHighSchoolPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "High School",
          description:
            "JIS High School is where students begin to explore how their passions and love of learning translate into life beyond school.",
          image: getRandomImageUrl(),
        }}
      />
      <div className="h-screen"></div>
    </ContainerBase>
  );
}
