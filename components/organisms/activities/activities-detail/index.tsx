"use client";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import * as React from "react";
import { useState, useEffect } from "react";
import BlogItem from "@/components/molecules/blog-item";
import { Blog } from "@/types/app";
import { BlogDetail, Blogs } from "@/data/api";
import Image from "next/image";
import { app } from "@/config/app";

interface Props {
  school: "sd" | "smp" | "sma";
  id: string;
}
const contentWithLineBreaks = (data: string) =>
  data.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
export default function ActivitiesDetail(props: Props) {
  const { school, id } = props;
  const [data, setData] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    BlogDetail(school, id).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [school, id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container section firstSection size="md" className="text-justify">
      <PageTitle>{data.title}</PageTitle>
      <div className="mx-auto text-center">
        <Image
          alt={data.title}
          src={`${app.blog_url[school]}/storage/${data.image}`}
          width={500}
          height={500}
          className="block mx-auto max-h-[360px] w-auto"
        ></Image>
      </div>

      <article className="mt-8 space-y-4">
        {contentWithLineBreaks(data.content)}
      </article>
    </Container>
  );
}
