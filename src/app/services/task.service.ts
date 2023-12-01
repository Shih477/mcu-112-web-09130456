import { NgFor } from '@angular/common';
import { Injectable } from '@angular/core';

import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Todo[] = [];

  add(content: string): void {
    const id =
      this.tasks.length === 0
        ? 1
        : Math.max(...this.tasks.map((task) => task.id)) + 1;
    const task = new Todo(id, content);
    this.tasks.push(task);
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
