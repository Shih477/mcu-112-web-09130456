import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Todo[] = [];

  getById(id: number): Todo | undefined {
    return this.tasks.find((task) => task.id === id)!;
  }

  getAll(): Todo[] {
    return this.tasks;
  }

  add(content: string): Observable<Todo> {
    const id =
      this.tasks.length === 0
        ? 1
        : Math.max(...this.tasks.map((task) => task.id)) + 1;
    const task = new Todo({ id, content });
    this.tasks.push(task);
    return of(task);
  }

  updateState(id: number, hasFinished: boolean): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].hasFinished = hasFinished;
    this.tasks[index].finishDate = hasFinished ? new Date() : undefined;
  }

  remove(id: number): void {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }
}
