import { nanoid } from "nanoid";
import { Tag } from "./tag";
import { CategoryProp } from "./types";

export class Todo {
  id: string;
  isDone: boolean; // 是否完成
  isDeleted: boolean; // 是否删除
  isDrop: boolean; // 是否删除在回收站
  category: CategoryProp; // 分类
  title?: string; // 标题
  remark?: string; // 备注
  checkList?: { content: string; checked: boolean }[]; // 检查列表
  tags?: string[]; // 标签
  deadlineDate?: string; //截止日期
  group?: string; // 所属区域/分组
  project?: string; // 所属项目

  constructor(category: CategoryProp) {
    this.isDone = false;
    this.isDeleted = false;
    this.isDrop = false;
    this.id = `id_${nanoid()}`;
    this.category = category;
  }
}
