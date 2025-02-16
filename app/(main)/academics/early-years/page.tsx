import ContainerBase from '@/components/atoms/container-base';
import PageHero from '@/components/organisms/layout/page-hero';
import { getNavigation } from '@/lib/utils/utils';
import AcademicsEarlyYearsIntro from '@/components/organisms/academics-early-years/academics-early-years-intro';
import AcademicsEarlyYearsCurriculum from '@/components/organisms/academics-early-years/academics-early-years-curriculum';
import AcademicsEarlyYearsExperience from '@/components/organisms/academics-early-years/academics-early-years-experience';
import AcademicsEarlyYearsCommunity from '@/components/organisms/academics-early-years/academics-early-years-community';
import AcademicsEarlyYearsCampuses from '@/components/organisms/academics-early-years/academics-early-years-campuses';
import { getRandomImageUrl } from '@/data/getRandomImageUrl';

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
          navigations: getNavigation('Academics'),
          name: 'Academics',
        }}
        header={{
          title: 'Nursery Kindergarten',
          description:
            'Program Taman Kanak-kanak Mitra Kasih Nursery telah dirancang dengan cermat dengan tujuan untuk membangkitkan rasa ingin tahu dalam diri setiap siswa, menumbuhkan kecintaan yang tulus dan abadi terhadap seni belajar.',
          image: getRandomImageUrl(),
        }}
      />

      <div className="space-y-40">
        <AcademicsEarlyYearsIntro />
      </div>
    </ContainerBase>
  );
}
