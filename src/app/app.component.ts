import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { Todo } from './model/todo';
import { TaskRemoteService } from './services/task-remote.service';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Observable, Subject, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HeaderComponent,
    TodoListComponent,
    TodoDetailComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskRemoteService);

  tasks$!: Observable<Todo[]>;

  readonly refresh$ = new Subject<void>();

  selectedId?: number;

  ngOnInit(): void {
    this.tasks$ = this.refresh$.pipe(
      startWith(undefined),
      switchMap(() => this.taskService.getAll())
    );
  }

  onAdd(): void {
    this.taskService.add('待辦事項 C').subscribe(() => this.refresh$.next());
  }

  onRemove(id: number): void {
    this.taskService.remove(id);
  }

  onStateChange({ task, state }: { task: Todo; state: boolean }): void {
    this.taskService
      .updateState(task, state)
      .subscribe(() => this.refresh$.next());
  }
}
