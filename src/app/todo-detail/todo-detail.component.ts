import { TaskService } from './../services/task.service';
import {
  Attribute,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  numberAttribute,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../model/todo';

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

  private readonly TaskService = inject(TaskService);

  @HostBinding('class')
  class = 'todo-detail';

  ngOnChanges(changes: SimpleChanges): void {
    this.task = this.TaskService.getById(this.id);
  }
}
