import { app } from "@/config/app";

import { useEffect, useState } from "react";

import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export async function ExJson(paramName: any) {
  const res = await fetch(`${app.blog_url.sd}/api/getJson?foo=value&bar=2`);
  const data = await res.json();

  return "data";
}
export type Blog = {
  id: number;
  title: string;
  subtitle: string | null;
  content: string;
  image: string | null;
  created_at: string; // Anda mungkin ingin menggunakan tipe Date jika ingin mengonversi dari string
  updated_at: string; // Anda mungkin ingin menggunakan tipe Date jika ingin mengonversi dari string
  tags: Tag[];
};

export type Tag = {
  id: number;
  name: string;
  created_at: string; // Anda mungkin ingin menggunakan tipe Date jika ingin mengonversi dari string
  updated_at: string; // Anda mungkin ingin menggunakan tipe Date jika ingin mengonversi dari string
  pivot: {
    blog_id: number;
    tags_id: number;
  };
};

export const Blog = async (school: keyof typeof app.blog_url = "sd") => {
  const res = await fetch(`${app.blog_url[school]}/api/get-blogs`);
  const repo = await res.json();
  return repo;
};
//  satisfies GetServerSideProps<{
//   repo: Blog;
// }>;
