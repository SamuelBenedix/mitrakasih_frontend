'use client';

import Image from 'next/image';
import { app } from '@/config/app';
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils/utils';
import Navigation from '@/components/molecules/navigation';
import Link from 'next/link';
import { paths } from '@/config/paths';
import { IconMenu } from '@tabler/icons-react';
import { useMobileNavbar } from '@/hooks/useMobileNavbar';
import MobileNavbar from '@/components/molecules/mobile-navbar';
import { navigations } from '@/config/navigations';

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const { open: openMobileNavbar } = useMobileNavbar();

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY || window.scrollY < 200) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.onscroll = () => {
      controlNavbar();
    };
  });

  return (
    <header>
      <div
        className={cn(
          'flex flex-row justify-between items-center md:px-10 fixed px-4 top-0 inset-x-0 z-20 transition-all duration-700',
          show
            ? 'h-[5rem] md:h-[8rem] bg-white shadow'
            : '-translate-y-[5rem] md:-translate-y-[8rem]'
        )}
      >
        <div>
          <Link href={paths.home}>
            <Image
              src={app.images.logo}
              alt={app.title}
              width={60}
              height={60}
              className="w-full md:h-20 md:w-32"
            />
          </Link>
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

      <MobileNavbar />
    </header>
  );
}
