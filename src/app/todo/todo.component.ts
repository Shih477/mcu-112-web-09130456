import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  content = '代辦事項 A';

  hasFinished = false;

  onSetStatus(hasFinished: boolean): void {
    this.hasFinished = hasFinished;
  }
}
