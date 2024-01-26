import { Tag } from "./tag";

export class Todo {
    title: string;
    detail?: string;
    tags: Tag[] = [];

    constructor(title: string) {
        this.title = title
    }
}