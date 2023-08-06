"use client";

import Container from "@/components/atoms/container";
import Image from "next/image";
import { app } from "@/config/app";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY || window.scrollY === 0) {
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
          "flex flex-row justify-between items-end px-10 fixed top-0 inset-x-0 z-10 transition-all duration-700",
          show ? "h-[8rem] bg-white" : "h-0",
        )}
      >
        <div>
          <Image
            src={app.images.logo}
            alt={app.title}
            width={100}
            height={100}
          />
        </div>
        <div className="mb-4">
          <p className="text-3xl text-primary-800">#ExperienceJIS</p>
        </div>
      </div>
    </header>
  );
}
