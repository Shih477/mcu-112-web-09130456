import { Routes } from '@angular/router';
import { TodoPageComponent } from './todo-page/todo-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: TodoPageComponent },
];
