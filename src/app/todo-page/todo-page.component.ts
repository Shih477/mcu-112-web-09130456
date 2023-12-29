import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import {
  Observable,
  BehaviorSubject,
  Subject,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { Todo } from '../model/todo';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HeaderComponent,
    TodoListComponent,
    TodoDetailComponent,
    TodoSearchComponent,
    TodoFormComponent,
    FooterComponent,
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css',
})
export class TodoPageComponent implements OnInit {
  taskService = inject(TaskService);

  tasks$!: Observable<Todo[]>;

  readonly search$ = new BehaviorSubject<string | null>(null);

  readonly refresh$ = new Subject<void>();

  selectedId?: number;

  ngOnInit(): void {
    this.tasks$ = merge(
      this.refresh$.pipe(startWith(undefined)),
      this.search$
    ).pipe(switchMap(() => this.taskService.getAll(this.search$.value)));
  }

  onSave(task: Todo): void {
    this.taskService.add(task).subscribe(() => this.refresh$.next());
  }

  onSearch(content: string | null): void {
    this.search$.next(content);
  }

  onRemove(id: number): void {
    this.taskService.remove(id).subscribe(() => this.refresh$.next());
  }

  onStateChange({ task, state }: { task: Todo; state: boolean }): void {
    this.taskService
      .updateState(task, state)
      .subscribe(() => this.refresh$.next());
  }
}
