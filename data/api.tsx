import { app } from '@/config/app';
import { ResponseAPI } from '@/types/app';

export async function ExJson(paramName: any) {
  const res = await fetch(`${app.blog_url.sd}/api/getJson?foo=value&bar=2`);
  const data = await res.json();

  return 'data';
}

export const Blogs = async (school: keyof typeof app.blog_url = 'sd') => {
  // const res = await fetch("http://sd.com:8000/api/get-blogs");
  const schools = ['sd', 'smp', 'sma'];
  if (!schools.includes(school)) {
    const res = await fetch(`${app.blog_url['sd']}/api/get-blogs`);
    const repo = await res.json();
    return repo;
  }
  const res = await fetch(`${app.blog_url[school]}/api/get-blogs`);
  const repo = await res.json();
  return repo;
};

export const BlogDetail = async (
  school: keyof typeof app.blog_url = 'sd',
  blog_id: string
) => {
  // const res = await fetch("http://sd.com:8000/api/get-blogs/7");
  const res = await fetch(`${app.blog_url[school]}/api/get-blogs/${blog_id}`);
  if (!res.ok) {
    throw new Error(`Fetch error: ${res.status}`);
  }
  const repo: ResponseAPI = await res.json();
  return repo;
};

export const HomeHeroAPI = async () => {
  const res = await fetch(`${app.blog_url['sma']}/api/headers`);
  const repo: ResponseAPI = await res.json();
  return repo.data;
};
