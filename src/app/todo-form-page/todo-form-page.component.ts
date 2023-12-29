import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '../model/todo';
import { TaskService } from '../services/task.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-form-page',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './todo-form-page.component.html',
  styleUrl: './todo-form-page.component.css',
})
export class TodoFormPageComponent {
  taskService = inject(TaskService);

  readonly router = inject(Router);

  onSave(task: Todo): void {
    this.taskService.add(task).subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.router.navigate(['home']);
  }
}
