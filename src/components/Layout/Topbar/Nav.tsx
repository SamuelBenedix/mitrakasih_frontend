import Link from "next/link";
import React, { ComponentProps } from "react";

function Nav(props: ComponentProps<"nav">) {
  return (
    <nav className="ml-10">
      <ul className="flex space-x-8">{props.children}</ul>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  value: string;
}

function NavLink(props: NavLinkProps) {
  return (
    <li>
      <Link href={props.href} className="font-semibold hover:underline">
        {props.value}
      </Link>
    </li>
  );
}

Nav.Link = NavLink;

export default Nav;
