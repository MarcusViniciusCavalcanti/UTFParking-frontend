
export class Configuration {
  modeSystem: string;
  ip: string;
  _links: Links
}

export class Links {
  load: Href;
  save: Href;
  updateModeSystem: Href;
}

export class Href {
  href: string;
}
