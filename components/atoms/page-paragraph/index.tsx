import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function PageParagraph(props: Props) {
  const { children, className } = props;

  return <p className={cn("text-gray-800 text-lg", className)}>{children}</p>;
}
