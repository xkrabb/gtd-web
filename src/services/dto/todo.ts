import { Tag } from "./tag";
import { CategoryProp } from "./types";

export class SubTodo {
  title: string;
  order: number;
  isDone: boolean;

  constructor(title: string, order: number) {
    this.title = title;
    this.order = order;
    this.isDone = false;
  }
}

export class Todo {
  id: symbol;
  title: string = "";
  detail?: string;
  tags: Tag[] = [];
  category: CategoryProp = "inbox"; // 分类
  group?: string; // 所属分组
  deadline?: string; // dayjs format string
  createDate: string = "";
  order: number = -1; // 排序
  subTodos: SubTodo[] = []; // 子任务
  isEditing: boolean = false; // 是否编辑中

  constructor(category: CategoryProp) {
    this.category = category;
    this.id = Symbol("todoId");
  }
}
