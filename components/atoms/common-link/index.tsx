import React from "react";
import { cn } from "@/lib/utils/utils";
import Link, { LinkProps } from "next/link";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface Props extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export default function CommonLink(props: Props) {
  const { children, className, ...rest } = props;

  return (
    <Link
      className={cn(
        "group col-span-1 flex flex-row space-x-2 font-medium items-center text-primary-800",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>&nbsp;
      <IconArrowNarrowRight className="group-hover:animate-bounce-arrow" />
    </Link>
  );
}
