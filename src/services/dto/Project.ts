export class Project {
  title: string;
  comment: string; // 备注
  areaId: string; // 所属区域
  todoIds: string[]; // 所持的todoId

  constructor(title: string, areaId: string) {
    this.title = title;
    this.todoIds = [];
    this.comment = "";
    this.areaId = areaId;
  }
}
