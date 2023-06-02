import React, { ComponentProps } from "react";
import Topbar from "./Topbar/Topbar";
import Footer from "./Footer/Footer";

function BaseLayout(props: ComponentProps<"main">) {
  return (
    <>
      <Topbar />
      <main className="min-h-screen">{props.children}</main>
      <Footer />
    </>
  );
}

export default BaseLayout;
