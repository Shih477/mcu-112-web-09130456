import { inject } from '@angular/core';
import { TaskService } from './../services/task.service';
import { ResolveFn } from '@angular/router';
import { Todo } from '../model/todo';

export const todoResolver: ResolveFn<Todo | undefined> = (
  route,
  state,
  taskService = inject(TaskService)
) => {
  const id = +route.paramMap.get('id')!;
  return taskService.getById(id);
};
