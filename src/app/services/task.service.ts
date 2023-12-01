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
}
