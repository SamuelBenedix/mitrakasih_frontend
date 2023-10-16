import ContainerBase from "@/components/atoms/container-base";
import PageHero from "@/components/organisms/layout/page-hero";
import { getNavigation } from "@/lib/utils/utils";
import AcademicsIntro from "@/components/organisms/academics/academics-intro";
import AcademicsReasons from "@/components/organisms/academics/academics-reasons";
import {
  _label,
  _pageDescription,
  _pageImage,
  _pageTitle,
} from "@/data/academics";

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
          navigations: getNavigation(_label),
          name: _label,
        }}
        header={{
          title: _pageTitle,
          description: _pageDescription,
          image: _pageImage,
        }}
      />

      <div className="space-y-40">
        <AcademicsIntro />
        {/* <AcademicsReasons /> */}
      </div>
    </ContainerBase>
  );
}
