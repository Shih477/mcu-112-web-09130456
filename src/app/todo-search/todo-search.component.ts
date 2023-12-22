import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-todo-search',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './todo-search.component.html',
  styleUrl: './todo-search.component.css',
})
export class TodoSearchComponent implements OnInit {
  @Output()
  readonly search = new EventEmitter<string | null>();

  readonly formControl = new FormControl<string | null>(null);

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value) => this.search.emit(value));
  }
}
