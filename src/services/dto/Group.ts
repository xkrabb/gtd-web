import { Todo } from "./Todo";

export class Group {
  name: string;
  todos: Todo[] = [];

  constructor(name: string) {
    this.name = name;
  }
}
