import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-item',
  templateUrl: './todo-input-add-item.component.html',
  styleUrls: ['./todo-input-add-item.component.scss']
})
export class TodoInputAddItemComponent implements OnInit {
  @Output("emitTask") public emitTask: EventEmitter<string> = new EventEmitter();
  public task: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItem(): void {
    this.emitTask.emit(this.task);
    this.task = "";
  }

  

}
