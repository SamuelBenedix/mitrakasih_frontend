import React from "react";
import { cn, getNavigation } from "@/lib/utils/utils";
import { app } from "@/config/app";
import Link from "next/link";
import { paths } from "@/config/paths";
interface ImageElementProps {
  className?: string;
  title?: string;
  image?: string;
  content?: string;
  school?: string;
}
export default function BlogItemElement(props: ImageElementProps) {
  const { className, title = "Judul", image, content, school } = props;
  return (
    <>
      <div
        className={cn(
          "h-52 lg:h-auto lg:w-52 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        )}
        style={{
          backgroundImage: `url('${image}')`,
        }}
        title={title}
      ></div>
      <div
        className={cn(
          "border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full"
        )}
      >
        <div className={cn("mb-8")}>
          <div className={cn("text-gray-900 font-bold text-xl mb-2")}>
            {title}
          </div>
          <p className={cn("text-gray-700 text-base")}>{content}</p>
        </div>
      </div>
    </>
  );
}
