import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface Props {
  title: string;
  description: string;
  linkLabel: string;
  linkHref: string;
  color?: "primary" | "white";
}

export default function SectionHeader(props: Props) {
  const { title, description, linkLabel, linkHref, color = "primary" } = props;

  return (
    <div
      className={cn(
        color === "primary"
          ? "text-primary-800 border-primary-800"
          : "text-white",
        "grid grid-cols-5 pb-20 pt-10 max-w-4xl md:space-x-10 border-t items-start",
      )}
    >
      <p className="text-4xl font-bold col-span-2">{title}</p>

      <p
        className={cn(
          color === "primary" ? "text-gray-500" : "text-white",
          "col-span-2",
        )}
      >
        {description}
      </p>

      <Link
        href={linkHref}
        className="group col-span-1 flex flex-row space-x-2 w-40 font-medium items-center"
      >
        <span>{linkLabel}</span>&nbsp;
        <IconArrowNarrowRight className="group-hover:animate-bounce-arrow" />
      </Link>
    </div>
  );
}
