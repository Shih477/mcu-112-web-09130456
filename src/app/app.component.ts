import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Todo } from './model/todo';
import { TaskRemoteService } from './services/task-remote.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {
  BehaviorSubject,
  Observable,
  Subject,
  merge,
  startWith,
  switchMap,
} from 'rxjs';
import { TaskService } from './services/task.service';
import { TodoSearchComponent } from './todo-search/todo-search.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

@Component({
  selector: 'app-root',
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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  onAdd(): void {
    this.taskService.add('待辦事項 C').subscribe(() => this.refresh$.next());
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
