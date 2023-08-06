import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Container(props: Props) {
  const { children } = props;

  return <div className="max-w-[1220px] mx-auto">{children}</div>;
}
