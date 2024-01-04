import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TaskService } from '../services/task.service';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { filter, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-todo-form-page',
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: './todo-form-page.component.html',
  styleUrl: './todo-form-page.component.css',
})
export class TodoFormPageComponent implements OnInit {
  taskService = inject(TaskService);

  formData?: Todo;

  readonly router = inject(Router);

  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => paramMap.has('id')),
        map((paramMap) => +paramMap.get('id')!),
        switchMap((id) => this.taskService.getById(id))
      )
      .subscribe((formData) => (this.formData = formData));
  }

  onSave(task: Todo): void {
    this.taskService.add(task).subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.router.navigate(['home']);
  }
}
