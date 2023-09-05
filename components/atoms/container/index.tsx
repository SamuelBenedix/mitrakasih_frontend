import React from "react";
import { cn } from "@/lib/utils/utils";
import { className } from "postcss-selector-parser";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Container(props: Props) {
  const { children, size = "xl", className } = props;

  return (
    <div
      className={cn(
        "mx-auto",
        size === "sm" && "max-w-[860px]",
        size === "md" && "max-w-[1200px]",
        size === "lg" && "max-w-[1500px]",
        size === "xl" && "max-w-[1620px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
