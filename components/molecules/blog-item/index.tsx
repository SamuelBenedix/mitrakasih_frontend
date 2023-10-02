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
      {/* <div
        className={cn(
          "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        )}
        style={{
          backgroundImage: `url('${app.blog_url["sd"]}/storage/${
            typeof children === "object" &&
            children !== null &&
            "image" in children
              ? children.image
              : "/images/blog/8zVsB3jHUycnusdmYBi6Eatm3FGsAGjsVl94ott4.jpg"
          }')`,
        }}
        title={children.title}
      ></div>
      <div
        className={cn(
          "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full"
        )}
      >
        <div className={cn("mb-8")}>
          <div className={cn("text-gray-900 font-bold text-xl mb-2")}>
            {children !== null &&
            typeof children === "object" &&
            "title" in children
              ? children.title
              : "Lorem ipsum dolor sit amet."}
          </div>
          <p className={cn("text-gray-700 text-base")}>{children.content}</p>
        </div>
      </div> */}
    </div>
  );
}
