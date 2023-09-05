export interface Nav {
  label: string;
  href: string;
  target?: string;
}

export interface Navs {
  label: string;
  href: string;
  target?: string;
  links: Nav[];
}

export const isNavs = (obj: any): obj is Navs => {
  return "links" in obj;
};

export const isNav = (obj: any): obj is Nav => {
  return "href" in obj;
};
