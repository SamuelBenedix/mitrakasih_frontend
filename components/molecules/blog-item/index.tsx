import React from "react";
import { cn, convertDate, mb_strimwidth } from "@/lib/utils/utils";
import Image from "next/image";
import { app } from "@/config/app";
import BlogItemElement from "@/components/atoms/blog-item-element";
import Link from "next/link";
import { paths } from "@/config/paths";
import { Blog } from "@/types/app";

interface Props {
  children?: Blog | any;
  className?: string;
  school: keyof typeof app.blog_url | "sd";
}

export default function BlogItem(props: Props) {
  const { children, className, school } = props;

  return (
    <Link
      href={`${paths.activities_blog}/${school}/[id]`}
      as={`${paths.activities_blog}/${school}/${children.id}`}
      className={cn("max-w-sm w-full lg:max-w-full lg:flex", className)}
    >
      <BlogItemElement
        title={children.title}
        content={mb_strimwidth(children.content, 0, 250)}
        event_date={convertDate(children.event_date)}
        school={school}
        image={`${
          children.image
            ? app.blog_url[school] + "/storage/" + children.image
            : "//placehold.it/200"
        }`}
      />
    </Link>
  );
}
