import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { app } from "@/config/app";
import { Nav } from "@/types/app";
import { navigations } from "@/config/navigations";
import * as React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function route(path: string, params?: Record<string, string>) {
  if (params) {
    let modifiedPath = path;

    Object.keys(params).forEach((key) => {
      const placeholder = `:${key}`;
      modifiedPath = modifiedPath.replace(placeholder, params[key]);
    });

    const missedParams = modifiedPath.match(/:([^/]+)/g);

    if (missedParams) {
      const missed = missedParams.map((match) => match.slice(1)).toString();
      const message = `Parameter ${missed} required`;

      throw new Error(message);
    }

    return modifiedPath;
  }

  return path;
}

export function getNavigation(label: string): Nav[] {
  return (
    navigations.find((navigation) => navigation.label === label)?.links || []
  );
}


export function convertDate(date: string) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};



export function mb_strimwidth(
  input: string,
  start: number = 0,
  length: number = 80,
  trimmarker = "..."
) {
  if (typeof input !== "string") return input;
  if (input.length <= length) return input;

  let result = input.substring(start, start + length - trimmarker.length);

  // Pastikan bahwa trimmarker benar-benar dapat dimasukkan dalam panjang akhir
  if (trimmarker.length > length) return trimmarker.substring(0, length);

  return result + trimmarker;
}