import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './footer/footer.component';
import { Todo } from './model/todo';
import { JsonPipe } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    TodoComponent,
    FooterComponent,
    JsonPipe,
    TodoListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = new Todo(1, '待辦事項 A');
}
