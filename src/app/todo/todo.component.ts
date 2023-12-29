import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true })
  task!: Todo;

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  remove = new EventEmitter<void>();

  @Output()
  view = new EventEmitter<void>();

  @Output()
  readonly stateChange = new EventEmitter<boolean>();

  @HostBinding('class')
  class = 'app-todo';

  onSetStatus(hasFinished: boolean): void {
    this.stateChange.emit(hasFinished);
  }
}
