export class Todo {
  constructor(id: number, content: string) {
    this.id = id;
    this.content = content;
    this.hasFinished = false;
  }

  id: number;
  content: string;
  hasFinished: boolean;
  finishDate: Date | undefined;
}
