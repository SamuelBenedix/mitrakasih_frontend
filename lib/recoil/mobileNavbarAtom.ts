import { atom } from "recoil";

export type MobileNavbar = {
  opened: boolean;
};

const defaultMobileNavbar: MobileNavbar = {
  opened: false,
};

export const mobileNavbarState = atom<MobileNavbar>({
  key: "mobileNavbarState",
  default: defaultMobileNavbar,
});
