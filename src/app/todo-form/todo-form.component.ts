import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormArray,
} from '@angular/forms';
import { ITodoForm } from '../interface/todo-form.interface';
import { Todo } from '../model/todo';
import { NgFor, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent implements OnChanges {
  @HostBinding('class')
  class = 'todo-form';

  @Input()
  initData?: Todo;

  @Output()
  readonly save = new EventEmitter<Todo>();

  @Output()
  readonly cancel = new EventEmitter<void>();

  readonly form = new FormGroup<ITodoForm>({
    content: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    tags: new FormArray<FormControl<string | null>>([]),
  });

  get formData(): Todo {
    return new Todo({
      content: this.content.value!,
    });
  }

  get content(): FormControl<string | null> {
    return this.form.get('content') as FormControl<string | null>;
  }

  get tags(): FormArray<FormControl<string | null>> {
    return this.form.get('tags') as FormArray<FormControl<string | null>>;
  }

  ngOnChanges(): void {
    if (this.initData) {
      if (this.initData.tags) this.onAddTag(this.initData.tags.length);
      this.form.patchValue(this.initData);
    }
  }

  onAddTag(count = 1): void {
    for (let i = 0; i <= count - 1; i++) {
      const control = new FormControl<string | null>(null, {
        validators: [Validators.required],
      });
      this.tags.push(control);
    }
  }

  onSave(): void {
    this.save.emit(this.formData);
    this.form.reset();
  }
}
