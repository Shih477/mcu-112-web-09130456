export class Todo {
  constructor(
    public id: number,
    public content: string,
    public hasFinished = false
  ) {}

  finishDate?: Date;
}
