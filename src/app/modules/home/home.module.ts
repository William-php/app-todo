import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TodoBtnDeleteAllComponent } from './components/todo-btn-delete-all/todo-btn-delete-all.component';
import { TodoInputAddItemComponent } from './components/todo-input-add-item/todo-input-add-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//PAGES:
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoBtnDeleteAllComponent,
    TodoInputAddItemComponent,
    TodoListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TodoBtnDeleteAllComponent,
    TodoInputAddItemComponent,
    TodoListComponent,
  ]
})
export class HomeModule { }
