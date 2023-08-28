import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export default function AboutMissionVisionPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{ navigations: getNavigation("About"), name: "About" }}
      />
      <div className="h-screen"></div>
    </ContainerBase>
  );
}
