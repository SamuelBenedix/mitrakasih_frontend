import React from "react";

interface Props {
  children: React.ReactNode;
  heading?: "h1" | "h2" | "h3";
}

export default function PageHeading(props: Props) {
  const { children, heading = "h1" } = props;

  switch (heading) {
    case "h1":
      return (
        <h1 className="text-primary-800 font-bold text-6xl">{children}</h1>
      );

    case "h2":
      return (
        <h2 className="text-primary-800 font-bold text-3xl">{children}</h2>
      );

    case "h3":
      return (
        <h3 className="text-primary-800 font-bold text-5xl">{children}</h3>
      );
  }
}
