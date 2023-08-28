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
export default function AcademicsEarlyYearsPage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <PageHero
        navBar={{
          navigations: getNavigation("Academics"),
          name: "Academics",
        }}
        header={{
          title: "Early Years",
          description:
            "The JIS Early Years program was designed to bring out the inquirer in each and every student and introduce them to a love of learning.",
          image: getRandomImageUrl(),
        }}
      />
      <div className="h-screen"></div>
    </ContainerBase>
  );
}
