import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { Todo } from './model/todo';
import { JsonPipe } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, JsonPipe, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks = [new Todo(1, '待辦事項 A'), new Todo(2, '待辦事項 B')];

  onStateChange(task: { index: number; state: boolean }): void {
    if (task.state) {
      this.tasks[task.index].setFinished(new Date());
    } else {
      this.tasks[task.index].finishDate = undefined;
      this.tasks[task.index].hasFinished = false;
    }
  }
}
