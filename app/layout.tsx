import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Metadata } from "next";
import React from "react";
import { app } from "@/config/app";
import Providers from "@/app/providers";
import Header from "@/components/organisms/layout/header";
import Footer from "@/components/organisms/layout/footer";

export const metadata: Metadata = {
  title: app.title,
  description: app.description,
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang={app.lang}>
      <body>
        <Providers>
          <div className="antialiased flex-col min-h-screen overflow-x-hidden flex">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
