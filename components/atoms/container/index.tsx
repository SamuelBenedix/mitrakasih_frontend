import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  firstSection?: boolean;
  section?: boolean;
  className?: string;
}

export default function Container(props: Props) {
  const { children, size = "xl", className, firstSection, section } = props;

  const classes = cn(
    "mx-auto",
    size === "sm" && "max-w-[860px] px-4",
    size === "md" && "max-w-[1200px] px-4",
    size === "lg" && "max-w-[1500px] px-4",
    size === "xl" && "max-w-[1620px] px-4",
    firstSection && "mt-14 md:mt-32",
    className,
  );

  if (section) {
    return <section className={classes}>{children}</section>;
  }

  return <div className={classes}>{children}</div>;
}
