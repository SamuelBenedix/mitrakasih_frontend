import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ContainerBase(props: Props) {
  const { children } = props;

  return <div>{children}</div>;
}
