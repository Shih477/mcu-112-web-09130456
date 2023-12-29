import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFormPageComponent } from './todo-form-page.component';

describe('TodoFormPageComponent', () => {
  let component: TodoFormPageComponent;
  let fixture: ComponentFixture<TodoFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
