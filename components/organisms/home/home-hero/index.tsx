'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { app } from '@/config/app';
import { cn } from '@/lib/utils/utils';
import Navigation from '@/components/molecules/navigation';
import Slider from 'react-slick';
import {
  IconChevronLeft,
  IconChevronRight,
  IconMenu,
} from '@tabler/icons-react';
import './styles.css';
import HomeSectionHeader from '../../../molecules/section-header';
import { _hero } from '@/data/home';
import { useMobileNavbar } from '@/hooks/useMobileNavbar';
import { navigations } from '@/config/navigations';
import { HeaderType, HomeHeroType } from '@/types/app';
import { HomeHeroAPI } from '@/data/api';

interface Props {}

export default function HomeHero(props: Props) {
  const {} = props;

  const slider = useRef<Slider | null>(null);

  const { open: openMobileNavbar } = useMobileNavbar();

  const next = () => {
    slider.current?.slickNext();
  };

  const prev = () => {
    slider.current?.slickPrev();
  };

  var t = setInterval(next, 5000);

  const settings = {
    speed: 700,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };
  // const [_hero, setHero] = useState<HomeHeroType[]>([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await HomeHeroAPI();
  //     let heroes: HomeHeroType[] = [];
  //     res.forEach((elem: HeaderType) => {
  //       heroes.push({
  //         title: elem.title ? elem.title : '',
  //         description: elem.subTitle ? elem.subTitle : '',
  //         image: elem.photo ? elem.photo : '',
  //         linkHref: '',
  //         linkLabel: '',
  //       });
  //     });
  //     setHero(_hero);
  //   };
  //   fetchData();
  // }, []);

  return (
    <section className="bg-black">
      <header>
        <div
          className={cn(
            'flex h-[5rem] md:h-[8rem] flex-row justify-between items-center px-4 md:px-10 absolute z-10 bg-white inset-x-0 top-0 text-white'
          )}
        >
          <div className="z-10">
            <Image
              src={app.images.logo}
              alt={app.title}
              width={120}
              height={120}
              className="h-12 md:h-20 w-full"
            />
          </div>
          <div className="mb-4 hidden md:flex self-end">
            {navigations.map((navigation) => (
              <Navigation key={navigation.label} link={navigation} />
            ))}
          </div>
          <div className="md:hidden text-primary-800">
            <button onClick={openMobileNavbar}>
              <IconMenu size={36} />
            </button>
          </div>
        </div>
      </header>
      <button
        onClick={prev}
        className="rounded-full absolute left-4 md:left-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronLeft size={32} />
      </button>
      <button
        onClick={next}
        className="rounded-full absolute right-4 md:right-10 z-10 top-[50%] border border-white p-2 text-white hover:border-white/80 hover:text-white/80 transition-all"
      >
        <IconChevronRight size={32} />
      </button>

      <Slider ref={slider} {...settings}>
        {_hero.map((dummy) => (
          <figure key={dummy.title} className="relative">
            <div className="w-full h-screen">
              <Image
                // src={app.blog_url['sma'] + '/storage/' + dummy.image}
                src={dummy.image}
                alt={dummy.title}
                width={2000}
                height={2000}
                className="object-cover w-full h-full slide-image"
              />
            </div>

            <div className="absolute bg-gradient-to-b from-black/60 to-transparent h-[30%] top-0 inset-x-0" />

            <div className="absolute bg-gradient-to-t from-black/90 to-transparent h-[90%] bottom-0 inset-x-0" />

            <figcaption className="absolute bottom-0 inset-x-0 px-4 md:mx-40 slide-section-header">
              <HomeSectionHeader
                title={dummy.title}
                description={dummy.description}
                linkLabel={dummy.linkLabel}
                linkHref={dummy.linkHref}
                color="white"
              />
            </figcaption>
          </figure>
        ))}
      </Slider>
    </section>
  );
}
