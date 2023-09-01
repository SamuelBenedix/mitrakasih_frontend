import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Paragraphs(props: Props) {
  const { children } = props;

  return <div className="space-y-4">{children}</div>;
}
