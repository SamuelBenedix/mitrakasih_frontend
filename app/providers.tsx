"use client";

import React from "react";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

export default function Providers(props: Props) {
  const { children } = props;

  return <RecoilRoot>{children}</RecoilRoot>;
}
