import { Component, DoCheck, OnInit } from '@angular/core';

//interface
import { TaskList } from '../../models/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,
  DoCheck {
  public taskList: Array<TaskList>;
  constructor() { }
  
  ngOnInit(): void {
    localStorage.getItem("list")? this.taskList = JSON.parse(localStorage.getItem("list")) : this.taskList = new Array();
    console.log("taskList: ", this.taskList);
  }

  ngDoCheck(): void {
    this.taskList.sort((first: TaskList, last: TaskList) => Number(first.checked) - Number(last.checked));
    this.setLocalStorage(this.taskList);
  }

  public setTask(e: string): void {    
    this.taskList.push({
      task: e, checked: false
    });
    
  }

  public deleteItem(i: number): void {
    this.taskList.splice(i, 1);
    // this.setLocalStorage(this.taskList);
  }

  public deleteAll(): void {
    const confirm = window.confirm("Você deseja deletar tudo ?");
    if (confirm) {
      this.taskList = [];
      // this.setLocalStorage(this.taskList);
    } ;
  }

  public validationInput(str: string, index: number): void {
    if (!str.length) {
      const confirm = window.confirm("Task está vazia, deseja deletar ?");
      if (confirm) this.deleteItem(index);
    }
  }

  public setLocalStorage(task: Array<TaskList>): void {
    localStorage.setItem("list", JSON.stringify(task));
  }

}
