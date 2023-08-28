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
export default function AcademicsMiddleSchoolPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Middle School",
          description:
            "This is the time when students start to branch out, discover new interests, and make meaningful connections between the real world and their love of learning.",
          image: getRandomImageUrl(),
        }}
      />
      <div className="h-screen"></div>
    </ContainerBase>
  );
}
