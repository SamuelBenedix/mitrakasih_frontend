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
export default function AdmissionPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Admissions"),
          name: "Admissions",
        }}
        header={{
          title: "Our Campuses",
          description:
            "Our campuses provide students a safe place to learn, play, engage with their surroundings, and explore their interests.",
          image: getRandomImageUrl(),
        }}
      />
      <div className="h-screen"></div>
    </ContainerBase>
  );
}
