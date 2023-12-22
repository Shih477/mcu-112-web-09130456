export class Todo {
  constructor(initData?: Partial<Todo>) {
    Object.assign(this, initData);
    if (this.hasFinished === undefined) {
      this.hasFinished = false;
    }
  }

  id!: number;

  content!: string;

  hasFinished!: boolean;

  finishDate?: Date;

  tags!: string[];

  setFinished(finishDate: Date): void {
    this.hasFinished = true;
    this.finishDate = finishDate;
  }
}
