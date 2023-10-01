import { app } from "@/config/app";

import { useEffect, useState } from "react";

export async function ExJson(paramName: any) {
  //   const [data, setData] = useState<any>(null);
  //   const [isLoading, setLoading] = useState<boolean>(true);

  //   useEffect(() => {
  //     fetch(`${app.blog_url.sd}/api/getJson?foo=value&bar=2`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       });
  //   }, []);

  //   if (isLoading) return "Loading";
  //   if (!data) return "No data";

  const res = await fetch(`${app.blog_url.sd}/api/getJson?foo=value&bar=2`);
  const data = await res.json();

  return data;
}
