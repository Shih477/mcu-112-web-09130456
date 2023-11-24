import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  @Input()
  content!: string;

  @Input()
  hasFinished!: boolean;

  onSetStatus(hasFinished: boolean): void {
    this.hasFinished = hasFinished;
  }
}
