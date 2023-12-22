import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ITodoForm } from '../interface/todo-form.interface';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @HostBinding('class')
  class = 'todo-form';

  @Output()
  readonly save = new EventEmitter<Todo>();

  readonly form = new FormGroup<ITodoForm>({
    content: new FormControl<string | null>(null),
  });

  get formData(): Todo {
    return new Todo({
      content: this.content.value!,
    });
  }

  get content(): FormControl<string | null> {
    return this.form.get('content') as FormControl<string | null>;
  }

  onSave(): void {
    this.save.emit(this.formData);
    this.form.reset();
  }
}
