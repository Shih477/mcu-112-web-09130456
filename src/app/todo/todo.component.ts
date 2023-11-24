import { DatePipe } from '@angular/common';
import {
  booleanAttribute,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  numberAttribute,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input({ required: true, transform: numberAttribute })
  id!: number;

  @Input({ required: true })
  content!: string;

  @Input({ transform: booleanAttribute })
  hasFinished!: boolean;
  @Output()
  readonly hasFinishedChange = new EventEmitter<boolean>();

  @Input()
  finishDate?: Date;
  @Output()
  readonly finishDateChange = new EventEmitter<Date | undefined>();

  @HostBinding('class')
  class = 'app-todo';

  onSetStatus(hasFinished: boolean): void {
    this.hasFinishedChange.emit(hasFinished);
    this.finishDateChange.emit(hasFinished ? new Date() : undefined);
  }
}
