import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoComponent } from '../todo/todo.component';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  imports: [TodoComponent, NgFor, NgIf],
})
export class TodoListComponent {
  @Input()
  tasks?: Todo[];

  @Output()
  stateChange = new EventEmitter<{ index: number; state: boolean }>();
}
