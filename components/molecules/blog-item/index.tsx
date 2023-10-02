import React from "react";
import { cn } from "@/lib/utils/utils";
import Image from "next/image";
import { app } from "@/config/app";
import { Blog } from "@/data/api";
import BlogItemElement from "@/components/atoms/blog-item-element";
import { getRandomImageUrl } from "@/data/getRandomImageUrl";

interface Props {
  children?: Blog | any;
  className?: string;
}

export default function BlogItem(props: Props) {
  const { children, className } = props;

  return (
    <div className={cn("max-w-sm w-full lg:max-w-full lg:flex", className)}>
      <BlogItemElement
        title={children.title}
        content={children.content}
        image={`${
          children.image
            ? app.blog_url["sd"] + "/storage/" + children.image
            : getRandomImageUrl()
        }`}
      />
    </div>
  );
}
