import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="mx-container-2xl flex items-center justify-start py-2">
      <div>
        <Link href="/">
          <Image src="/images/logo.png" alt="" width={80} height={80} />
        </Link>
      </div>
      <Nav>
        <Nav.Link href="#" value="Home" />
        <Nav.Link href="#" value="Tentang kami" />
        <Nav.Link href="#" value="Event" />
        <Nav.Link href="#" value="Berita" />
        <Nav.Link href="#" value="Kontak kami" />
      </Nav>
    </header>
  );
};
export default Navbar;
