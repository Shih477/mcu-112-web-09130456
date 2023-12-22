import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css',
})
export class TodoSearchComponent {
  @Output()
  readonly search = new EventEmitter<string>();
}
