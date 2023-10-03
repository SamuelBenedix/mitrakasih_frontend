import React from "react";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import { app } from "@/config/app";
import { Blog } from "@/data/api";
import BlogItemElement from "@/components/atoms/blog-item-element";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";
import Link from "next/link";
import { paths } from "@/config/paths";

interface Props {
  children?: Blog | any;
  className?: string;
  school: keyof typeof app.blog_url | "sd";
}

export default function BlogItem(props: Props) {
  const { children, className, school } = props;

  return (
    <Link
      href={paths.activities_blog + "/" + school}
      className={cn("max-w-sm w-full lg:max-w-full lg:flex", className)}
    >
      <BlogItemElement
        title={children.title}
        content={children.content}
        school={school}
        image={`${
          children.image
            ? app.blog_url[school] + "/storage/" + children.image
            : getRandomImageUrl()
        }`}
      />
    </Link>
  );
}
