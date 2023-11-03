export class Todo {
  constructor(
    public id: number,
    public content: string,
    public hasFinished: boolean = false
  ) {}

  finishDate?: Date;

  setFinished(finishDate: Date): void {
    this.hasFinished = true;
    this.finishDate = finishDate;
  }
}
