import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Button(props: Props) {
  const { children, className } = props;

  return (
    <button
      className={cn(
        "bg-white font-semibold text-primary-800 py-4 px-6 hover:bg-blue-800 outline outline-1 transition outline-primary-800 hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
