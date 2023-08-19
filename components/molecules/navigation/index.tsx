import { isNavs, Nav, Navs } from "@/types/app";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  link: Nav | Navs;
  color?: "primary" | "white";
}

export default function Navigation(props: Props) {
  const { link, color = "primary" } = props;

  if (isNavs(link)) {
    return (
      <div className="z-10 group relative py-2 cursor-pointer px-6">
        <button
          className={cn(
            color === "primary" ? "text-primary-800" : "text-white",
            "font-semibold",
          )}
        >
          <span>{link.label}</span>
          <div
            className={cn(
              color === "primary" ? "bg-primary-800" : "bg-white",
              "w-0 h-1 mt-4 group-hover:w-full transition-all duration-700",
            )}
          />
        </button>
        <div className="absolute -right-4 bg-primary-800 w-[20rem] opacity-0 overflow-hidden h-0 group-hover:h-auto ease-out-quart group-hover:opacity-100 transition-all duration-1000">
          <ul className="flex flex-col w-full divide-y px-8 py-4 text-white">
            {link.links.map((sublink) => (
              <li key={sublink.label} className="py-4 w-full">
                <Link href={sublink.href} className="block hover:font-semibold">
                  {sublink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="z-10 group relative cursor-pointer py-2 px-6">
      <Link
        href={link.href}
        className={cn(
          color === "primary" ? "text-primary-800" : "text-white",
          "font-semibold",
        )}
      >
        <span>{link.label}</span>
        <div
          className={cn(
            color === "primary" ? "bg-primary-800" : "bg-white",
            "w-0 h-1 mt-4 group-hover:w-full transition-all duration-500",
          )}
        />
      </Link>
    </div>
  );
}
