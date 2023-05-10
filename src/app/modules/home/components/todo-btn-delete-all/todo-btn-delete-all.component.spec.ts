import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBtnDeleteAllComponent } from './todo-btn-delete-all.component';

describe('TodoBtnDeleteAllComponent', () => {
  let component: TodoBtnDeleteAllComponent;
  let fixture: ComponentFixture<TodoBtnDeleteAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBtnDeleteAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBtnDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
