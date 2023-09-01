import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}

export default function Paragraph(props: Props) {
  const { children, className, size = "md" } = props;

  return (
    <p
      className={cn(
        "text-gray-800",
        size === "md" && "text-lg",
        size === "lg" && "text-xl",
        className,
      )}
    >
      {children}
    </p>
  );
}
