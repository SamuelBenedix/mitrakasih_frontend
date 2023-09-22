"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { app } from "@/config/app";
import Link from "next/link";
import { IconChevronDown, IconX } from "@tabler/icons-react";
import React from "react";
import { cn } from "@/lib/utils/utils";
import { paths } from "@/config/paths";
import Image from "next/image";
import { useMobileNavbar } from "@/hooks/useMobileNavbar";

export default function MobileNavbar() {
  const {
    close: closeMobileNavbar,
    state: mobileNavbarState,
    accordionValue,
    setAccordionValue,
  } = useMobileNavbar();

  return (
    <div
      className={cn(
        "w-full min-h-screen bg-primary-800 fixed z-20 transition-all duration-300",
        mobileNavbarState.opened
          ? "translate-x-0 opacity-100"
          : "translate-x-[100vw] opacity-0",
      )}
    >
      <div className="flex flex-row justify-between items-center px-4">
        <div>
          <Link href={paths.home}>
            <Image
              src={app.images.logo}
              alt={app.title}
              width={120}
              height={120}
              className="h-20 md:h-28 w-full"
            />
          </Link>
        </div>
        <div className="md:hidden text-white">
          <button onClick={closeMobileNavbar}>
            <IconX size={36} />
          </button>
        </div>
      </div>

      <div className="text-white px-8">
        <Accordion.Root
          type="multiple"
          className="divide-y"
          value={accordionValue}
          onValueChange={setAccordionValue}
        >
          {app.navigations.map((navigation) => (
            <Accordion.Item
              key={navigation.label}
              value={navigation.label}
              className="py-6"
            >
              <Accordion.Trigger className="flex justify-between items-center w-full [&[data-state=open]>svg]:rotate-180">
                <Link
                  href={navigation.href}
                  className="text-lg font-semibold hover:underline active:underline"
                  onClick={closeMobileNavbar}
                >
                  {navigation.label}
                </Link>
                {navigation.links && (
                  <IconChevronDown className="transition-transform duration-200" />
                )}
              </Accordion.Trigger>
              {navigation.links && (
                <Accordion.Content className="data-[state=open]:animate-radix-slide-down data-[state=closed]:animate-radix-slide-up overflow-hidden">
                  <div className=" pl-6 pt-6 flex flex-col">
                    {navigation.links.map((subNavigation) => (
                      <Link
                        key={subNavigation.label}
                        href={subNavigation.href}
                        className="py-1.5 hover:underline active:underline"
                        onClick={closeMobileNavbar}
                      >
                        {subNavigation.label}
                      </Link>
                    ))}
                  </div>
                </Accordion.Content>
              )}
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
}
