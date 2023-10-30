"use client";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import * as React from "react";
import { useState, useEffect } from "react";
import { Blog, BlogData } from "@/types/app";
import { BlogDetail, Blogs } from "@/data/api";
import Image from "next/image";
import { app } from "@/config/app";
import { convertDate } from "@/lib/utils/utils";

interface Props {
  school: "sd" | "smp" | "sma";
  id: string;
}

export const contentWithLineBreaks = (data: string) =>
  data.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

export default function ActivitiesDetail(props: Props) {
  const { school, id } = props;
  const [data, setData] = useState<BlogData>();

  useEffect(() => {
    BlogDetail(school, id).then((res) => {
      setData(res.data);
    });
  }, [school, id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container section firstSection size="md" className="text-justify">
      <PageTitle heading="h2">{data.title}</PageTitle>
      <div className="mx-auto text-center">
        <Image
          alt={data.title}
          src={`${app.blog_url[school]}/storage/${data.image}`}
          width={500}
          height={500}
          className="block mx-auto max-w-[80%] min-w-[80%]"
        ></Image>
      </div>

      <article className="mt-8 space-y-4">
        Tanggal Event :{" "}
        {convertDate(
          data.event_date
            ? data.event_date
            : new Date().toISOString().split("T")[0]
        )}
      </article>
      <article className="mt-8 space-y-4">
        {contentWithLineBreaks(data.content)}
      </article>
    </Container>
  );
}
