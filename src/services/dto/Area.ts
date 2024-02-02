import { Project } from "./Project";

export class Area {
  title: string;
  groups: Project[];

  constructor(title: string) {
    this.title = title;
    this.groups = [];
  }
}
