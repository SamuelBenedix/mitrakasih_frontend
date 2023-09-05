import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  heading?: "h1" | "h2" | "h3";
}

export default function Heading(props: Props) {
  const { children, heading = "h1", className } = props;

  switch (heading) {
    case "h1":
      return (
        <h1
          className={cn("text-primary-800 font-bold text-6xl mb-8", className)}
        >
          {children}
        </h1>
      );

    case "h2":
      return (
        <h2
          className={cn("text-primary-800 font-bold text-3xl mb-8", className)}
        >
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={cn("text-gray-800 font-bold text-xl mb-8", className)}>
          {children}
        </h3>
      );
  }
}
