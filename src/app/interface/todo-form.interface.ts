import { FormArray, FormControl } from '@angular/forms';

export interface ITodoForm {
  content: FormControl<string | null>;

  tags: FormArray<FormControl<string | null>>;
}
