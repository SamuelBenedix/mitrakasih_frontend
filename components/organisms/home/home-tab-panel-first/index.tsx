'use client';

import React from 'react';
import Container from '@/components/atoms/container';
import HomeSectionHeader from '../../../molecules/section-header';
import { _tabPanelFirst } from '@/data/home';

interface Props {}

export default function HomeTabPanelFirst(props: Props) {
  const {} = props;

  const settings = {
    speed: 700,
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 1,
    arrows: false,
    className: 'tab-panel-slider',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <section>
      <HomeSectionHeader
        title={_tabPanelFirst.title}
        description={_tabPanelFirst.description}
        linkLabel={_tabPanelFirst.linkLabel}
        linkHref={_tabPanelFirst.linkHref}
      />
    </section>
  );
}
