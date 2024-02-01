import { nanoid } from "nanoid";
import { Tag } from "./tag";
import { CategoryProp } from "./types";

type SubTodoProp = {
  title: string;
  order: number;
  isDone: boolean;
};

export class Todo {
  id: string;
  title: string = "";
  detail?: string;
  tags: Tag[] = [];
  category: CategoryProp = "inbox"; // 分类
  group?: string; // 所属分组
  deadline?: string; // dayjs format string
  createDate: string = "";
  order: number = -1; // 排序
  subTodos: SubTodoProp[] = []; // 子任务
  isEditing: boolean = false; // 是否编辑中

  constructor(category: CategoryProp) {
    this.category = category;
    this.id = `id_${nanoid()}`;
  }
}
