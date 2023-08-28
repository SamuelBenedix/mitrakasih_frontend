import React from "react";
import { cn } from "@/lib/utils/utils";

interface Props {
  children: React.ReactNode;
}

export default function PageQuote(props: Props) {
  const { children } = props;

  return <p className="text-gray-800">{children}</p>;
}
