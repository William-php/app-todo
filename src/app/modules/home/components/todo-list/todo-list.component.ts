import { Component, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = new Array();
  constructor() { }

  ngOnInit(): void {
  }

  public addTask(e: string): void {
    console.log("task: ", e);
    this.taskList.push({
      task: e, checked: false
    });
  }

  public deleteItem(i: number): void {
    this.taskList.splice(i, 1);
  }

  public deleteAll(): void {
    const confirm = window.confirm("Você deseja deletar tudo ?");
    if (confirm) this.taskList = [];
    
  }

}
