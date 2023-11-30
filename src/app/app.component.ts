import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { FooterComponent } from './footer/footer.component';
import { Todo } from './model/todo';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TodoComponent, FooterComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = new Todo(1, '待辦事項 A');

  onStateChange(state: boolean): void {
    if (state) {
      this.task.setFinished(new Date());
    } else {
      this.task.finishDate = undefined;
      this.task.hasFinished = false;
    }
  }
}
