import ContainerBase from '@/components/atoms/container-base';
import HomeHero from '@/components/organisms/home/home-hero';
import HomeAbout from '@/components/organisms/home/home-about';

import HomeCampusSlideshow from '@/components/organisms/home/home-campus-slideshow';
import HomeTabPanelSecond from '@/components/organisms/home/home-tab-panel-second';
import HomeCollege from '@/components/organisms/home/home-college';
import HomeCommunityVoices from '@/components/organisms/home/home-community-voices';
import { Metadata } from 'next';
import { app } from '@/config/app';

interface Props {}

/**
 * React page
 *
 * @param props
 * @returns
 */
export const metadata: Metadata = {
  title: app.title,
  description: app.description,
};

export default function HomePage(props: Props) {
  const {} = props;

  return (
    <ContainerBase>
      <HomeHero />
      <HomeAbout />
      <HomeCampusSlideshow />
      <HomeTabPanelSecond />
      {/* <HomeCollege /> */}
      <HomeCommunityVoices />
    </ContainerBase>
  );
}
