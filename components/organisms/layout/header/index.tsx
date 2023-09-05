"use client";

import Container from "@/components/atoms/container";
import Image from "next/image";
import { app } from "@/config/app";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils/utils";
import Navigation from "@/components/molecules/navigation";
import Link from "next/link";
import { paths } from "@/config/paths";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

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
          "flex flex-row justify-between items-end px-10 fixed top-0 inset-x-0 z-20 transition-all duration-700",
          show ? "h-[8rem] bg-white shadow" : "h-0",
        )}
      >
        <div>
          <Link href={paths.home}>
            <Image
              src={app.images.logo}
              alt={app.title}
              width={120}
              height={120}
            />
          </Link>
        </div>
        <div className="mb-4 flex">
          {app.navigations.map((navigation) => (
            <Navigation key={navigation.label} link={navigation} />
          ))}
        </div>
      </div>
    </header>
  );
}
