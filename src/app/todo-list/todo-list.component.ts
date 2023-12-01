import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';
import { TodoComponent } from '../todo/todo.component';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoComponent],
})
export class TodoListComponent {
  task = new Todo(1, '待辦事項 A');
  onStateChange(state: boolean): void {
    if (state) {
      this.task.setFinished(new Date());
    } else {
      this.task.finishDate = undefined;
      this.task.hasFinished = false;
    }
  }
}
