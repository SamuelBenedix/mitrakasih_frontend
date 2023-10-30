"use client";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import * as React from "react";
import { useState, useEffect } from "react";
import BlogItem from "@/components/molecules/blog-item";
import { Blog, BlogData } from "@/types/app";
import { Blogs } from "@/data/api";

interface Props {
  school?: "sd" | "smp" | "sma";
}

export default function ActivitiesBlog(props: Props) {
  const { school = "sd" } = props;
  const [data, setData] = useState<BlogData[]>([]);
  useEffect(() => {
    Blogs(school).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [school]);

  return (
    <Container section firstSection size="md">
      <PageTitle>Activities</PageTitle>

      {/* <Quote></Quote> */}

      <article className="mt-8 space-y-4">
        {data.map((item) => (
          <BlogItem key={item.id} school={school}>
            {item}
          </BlogItem>
        ))}
      </article>
    </Container>
  );
}
