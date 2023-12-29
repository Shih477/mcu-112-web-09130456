import { ActivatedRoute, Router } from '@angular/router';
import * as todoDetailComponent from '../todo-detail/todo-detail.component';
import { filter, map } from 'rxjs';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [todoDetailComponent.TodoDetailComponent],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.css',
})
export class TodoDetailPageComponent implements OnInit {
  selectedId?: number;

  readonly router = inject(Router);

  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => paramMap.has('id')),
        map((paramMap) => +paramMap.get('id')!)
      )
      .subscribe((id) => (this.selectedId = id));
  }

  onReturn(): void {
    this.router.navigate(['home']);
  }
}
