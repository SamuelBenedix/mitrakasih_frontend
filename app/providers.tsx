"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Providers(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
