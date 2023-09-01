import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function List(props: Props) {
  const { children } = props;

  return <ul className="list-disc space-y-1">{children}</ul>;
}
