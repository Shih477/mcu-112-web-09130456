import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskRemoteService {
  private readonly url = 'http://localhost:3000/tasks';

  private readonly httpClient = inject(HttpClient);

  getById(id: number): Observable<Todo | undefined> {
    console.log('Task Remote Service - getById');
    return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`);
  }

  getAll(content: string | null): Observable<Todo[]> {
    console.log('Task Remote Service - getAll');
    const url = content ? `${this.url}?content_like=${content}` : this.url;
    return this.httpClient.get<Todo[]>(url);
  }

  add(task: Todo): Observable<Todo> {
    console.log('Task Remote Service - add');
    return this.httpClient.post<Todo>(this.url, task);
  }

  updateState({ id, content }: Todo, hasFinished: boolean): Observable<Todo> {
    console.log('Task Remote Service - update');
    const task = new Todo({ content, hasFinished });
    return this.httpClient.put<Todo>(`${this.url}/${id}`, task);
  }

  remove(id: number): Observable<Todo> {
    console.log('Task Remote Service - remove');
    return this.httpClient.delete<Todo>(`${this.url}/${id}`);
  }
}
