import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  inject,
  Input,
  numberAttribute,
  OnChanges,
} from '@angular/core';

import { Todo } from '../model/todo';
import { TaskRemoteService } from '../services/task-remote.service';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css',
})
export class TodoDetailComponent implements OnChanges {
  @Input({ transform: numberAttribute })
  id!: number;

  task?: Todo;

  private readonly taskService = inject(TaskRemoteService);

  @HostBinding('class')
  class = 'todo-detail';

  ngOnChanges(): void {
    this.taskService.getById(this.id).subscribe((task) => (this.task = task));
  }
}
