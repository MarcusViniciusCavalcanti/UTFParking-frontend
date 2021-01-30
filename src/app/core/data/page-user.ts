import { User } from "./user";

export class PageUser {
  _embedded: Embedded;
  _links: Links;
  page: Page;
}

export class Embedded {
  userRepresentationList: User[];
}

export class Links {
  self: Href;
}

export class Href {
  href: string;
}

export class Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

