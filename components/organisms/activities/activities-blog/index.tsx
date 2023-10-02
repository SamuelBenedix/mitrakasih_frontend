"use client";
import Container from "@/components/atoms/container";
import PageTitle from "../../../atoms/heading";
import PageParagraph from "../../../atoms/paragraph";
import Quote from "@/components/atoms/quote";
import * as React from "react";
import { useState, useEffect } from "react";
import { Blog } from "@/data/api";
import BlogItem from "@/components/molecules/blog-item";

interface Props {}

export default function ActivitiesBlog(props: Props) {
  const {} = props;
  const [data, setData] = useState<Blog[]>([]);
  useEffect(() => {
    Blog().then((res) => {
      console.log("res.data");
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <Container section firstSection size="md">
      <PageTitle>Activities</PageTitle>

      {/* <Quote>Ini Blog</Quote> */}

      <article className="mt-8 space-y-4">
        {data.map((item) => (
          <BlogItem key={item.id}>{item}</BlogItem>
        ))}
      </article>
    </Container>
  );
}
