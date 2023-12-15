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
    return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`);
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.url);
  }

  add(content: string): Observable<Todo> {
    const task = new Todo({ content });
    return this.httpClient.post<Todo>(this.url, task);
  }

  updateState(id: number, hasFinished: boolean): void {
    throw new Error('Method not implemented.');
  }

  remove(id: number): void {
    throw new Error('Method not implemented.');
  }
}
