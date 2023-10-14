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

export interface Slides {
  title: string;
  description: string;
  linkLabel?: string;
  linkHref?: string;
  slides: Figure[];
}

export interface Figure {
  title: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
  image: string;
}

export interface ResponseAPI {
  status: number;
  data: any;
  message?: string;
}

export interface Blog {
  status: number;
  data: BlogData;
};

export interface BlogData {
  id: number;
  title: string;
  event_date: string | null;
  content: string;
  image: string | null;
  tags?: Tag[];
}

export interface Tag {
  id: number;
  name: string;
  pivot: {
    blog_id: number;
    tags_id: number;
  };
};