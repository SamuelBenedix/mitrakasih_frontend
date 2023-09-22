import Container from "@/components/atoms/container";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils/utils";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconMapPinFilled,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { app } from "@/config/app";

export default function Footer() {
  return (
    <footer className={cn(styles.footer, "mt-20 py-10 text-white")}>
      <Container size="md">
        <div className="space-y-8">
          <div className="max-w-md">
            <p className="text-2xl font-bold">
              Learning in Indonesia To Be Best for the World
            </p>
          </div>
          <div>
            <div className="flex space-x-2">
              <IconPhone />
              <span>+6221 509 89 555</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex space-x-2">
              <IconMapPinFilled />
              <div className="max-w-xs">
                <p className="font-semibold">Pondok Indah Campus</p>
                <p>Jl. Duta Indah III Pondok Indah, Jakarta12310</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <IconMapPinFilled />
              <div className="max-w-xs">
                <p className="font-semibold">Pondok Indah Campus</p>
                <p>Jl. Duta Indah III Pondok Indah, Jakarta12310</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <IconMapPinFilled />
              <div className="max-w-xs">
                <p className="font-semibold">Pondok Indah Campus</p>
                <p>Jl. Duta Indah III Pondok Indah, Jakarta12310</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-10 items-center space-y-6 md:space-y-0">
              <Link
                href={app.links.contactUs}
                className="font-medium hover:underline"
              >
                Contact Us
              </Link>
              <Link
                href={app.links.workAtJis}
                className="font-medium hover:underline"
              >
                Work at Mitra Kasih
              </Link>
              <Link
                href={app.links.privacyPolicy}
                className="font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href={app.links.siteMap}
                className="font-medium hover:underline"
              >
                Site Map
              </Link>
              <Link
                href={app.links.accessibility}
                className="font-medium hover:underline"
              >
                Accessibility
              </Link>
            </div>
            <div className="flex flex-row space-x-10">
              <Link href={app.links.facebook}>
                <IconBrandFacebook />
              </Link>
              <Link href={app.links.instagram}>
                <IconBrandInstagram />
              </Link>
              <Link href={app.links.x}>
                <IconBrandX />
              </Link>
              <Link href={app.links.youtube}>
                <IconBrandYoutube />
              </Link>
              <Link href={app.links.linkedIn}>
                <IconBrandLinkedin />
              </Link>
            </div>
          </div>
          <div className="border-t pt-10 text-center">
            &copy; Copyright {new Date().getFullYear()}
          </div>
        </div>
      </Container>
    </footer>
  );
}
