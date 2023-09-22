import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  firstSection?: boolean;
  section?: boolean;
  noPadding?: boolean;
  className?: string;
}

export default function Container(props: Props) {
  const {
    children,
    size = "xl",
    className,
    firstSection,
    section,
    noPadding,
  } = props;

  const classes = cn(
    "mx-auto",
    noPadding ? "px-0" : "px-4",
    size === "sm" && "max-w-[860px]",
    size === "md" && "max-w-[1200px]",
    size === "lg" && "max-w-[1500px]",
    size === "xl" && "max-w-[1620px]",
    firstSection && "mt-14 md:mt-32",
    className,
  );

  if (section) {
    return <section className={classes}>{children}</section>;
  }

  return <div className={classes}>{children}</div>;
}
