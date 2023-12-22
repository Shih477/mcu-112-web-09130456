import { FormControl } from '@angular/forms';

export interface ITodoForm {
  content: FormControl<string | null>;
}
