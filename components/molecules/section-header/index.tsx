import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/utils";
import { IconArrowNarrowRight } from "@tabler/icons-react";

type Props = {
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
  color?: "primary" | "white";
};

export default function SectionHeader(props: Props) {
  const {
    title,
    description,
    linkLabel,
    linkHref = "#",
    color = "primary",
  } = props;

  return (
    <div
      className={cn(
        color === "primary"
          ? "text-primary-800 border-primary-800"
          : "text-white",
        "grid grid-cols-1 md:grid-cols-5 gap-y-4 pb-20 pt-10 max-w-5xl md:space-x-10 border-t items-start",
      )}
    >
      <h2 className="text-2xl md:text-5xl font-bold col-span-2">{title}</h2>

      <p
        className={cn(
          color === "primary" ? "text-gray-500" : "text-white",
          "col-span-2 md:leading-loose",
        )}
      >
        {description}
      </p>

      {linkLabel && (
        <Link
          href={linkHref}
          className="group col-span-1 flex mt-4 md:mt-0 flex-row space-x-2 md:w-40 font-medium items-center"
        >
          <span>{linkLabel}</span>&nbsp;
          <IconArrowNarrowRight className="group-hover:animate-bounce-arrow" />
        </Link>
      )}
    </div>
  );
}
