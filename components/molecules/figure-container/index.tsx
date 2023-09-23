import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function FigureContainer(props: Props) {
  const { children, className } = props;

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2 mt-20 gap-10", className)}
    >
      {children}
    </div>
  );
}
