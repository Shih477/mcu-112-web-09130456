import { Injectable } from '@angular/core';

import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Todo[] = [];

  constructor() {}
}
