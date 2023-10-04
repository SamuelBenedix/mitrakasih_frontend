import { app } from "@/config/app";

export async function ExJson(paramName: any) {
  const res = await fetch(`${app.blog_url.sd}/api/getJson?foo=value&bar=2`);
  const data = await res.json();

  return "data";
}

export const Blogs = async (school: keyof typeof app.blog_url = "sd") => {
  const res = await fetch(`${app.blog_url[school]}/api/get-blogs`);
  const repo = await res.json();
  return repo;
};

export const BlogDetail = async (
  school: keyof typeof app.blog_url = "sd",
  blog_id: string
) => {
  const res = await fetch(`${app.blog_url[school]}/api/get-blogs/${blog_id}`);
  const repo = await res.json();
  return repo;
};
