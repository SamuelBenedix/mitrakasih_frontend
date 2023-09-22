"use client";

import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import { app } from "@/config/app";
import Navigation from "@/components/molecules/navigation";
import React from "react";
import HomeSectionHeader from "../../../molecules/section-header";
import { Nav } from "@/types/app";
import Link from "next/link";
import { IconArrowRight, IconMenu } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { paths } from "@/config/paths";
import { useMobileNavbar } from "@/hooks/useMobileNavbar";

type Props = {
  navBar?: {
    navigations: Nav[];
    name: string;
  };
  header?: {
    title?: string;
    description?: string;
    image: string;
  };
};

export default function PageHero(props: Props) {
  const { navBar, header } = props;

  const { open: openMobileNavbar } = useMobileNavbar();

  const pathname = usePathname();

  return (
    <div>
      <header>
        <div
          className={cn(
            header ? "bg-white" : " bg-primary-800",
            "flex h-[5rem] md:h-[8rem] flex-row justify-between items-center px-4 md:px-10",
          )}
        >
          <div className="z-10">
            <Link href={paths.home}>
              <Image
                src={header ? app.images.logo : app.images.logoWhite}
                alt={app.title}
                width={120}
                height={120}
                className="h-12 md:h-20 w-full"
              />
            </Link>
          </div>
          <div className="mb-4 hidden md:flex self-end">
            {app.navigations.map((navigation) => (
              <Navigation
                key={navigation.label}
                link={navigation}
                color={header ? "primary" : "white"}
              />
            ))}
          </div>
          <div
            className={cn(
              "md:hidden",
              header ? "text-primary-800" : "text-white",
            )}
          >
            <button onClick={openMobileNavbar}>
              <IconMenu size={36} />
            </button>
          </div>
        </div>
      </header>

      {header && (
        <div className="relative h-[28rem] md:h-[34rem]">
          <Image
            src={header.image}
            alt=""
            width={2000}
            height={2000}
            className="object-cover w-full h-full"
          />

          <div className="absolute bg-gradient-to-t from-black/60 to-transparent h-[90%] bottom-0 inset-x-0" />

          <figcaption className="absolute -bottom-10 md:bottom-0 inset-x-0 px-4 md:mx-40 slide-section-header">
            {header.title && header.description && (
              <HomeSectionHeader
                title={header.title}
                description={header.description}
                color="white"
              />
            )}
          </figcaption>
        </div>
      )}

      {navBar && (
        <div className="hidden md:flex border-b divide-x">
          <div className="w-52 py-7 flex justify-center items-center">
            <p className="flex space-x-6 items-center text-primary-800 font-semibold">
              <span>{navBar.name}</span> <IconArrowRight />
            </p>
          </div>
          <div className="flex py-7 px-7">
            {navBar.navigations.map((nav) => (
              <div key={nav.label} className="px-4">
                <Link
                  href={nav.href}
                  className={cn(
                    pathname === nav.href
                      ? "font-semibold text-primary-800"
                      : "hover:underline hover:text-primary-800 text-neutral-500 transition-all",
                  )}
                >
                  {nav.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
