import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../model/todo.type';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService); // inject the TodoService

  // define a signal to hold array of todo items
  todoItems = signal<Array<Todo>>([]); // signal to hold the array of todo items

  ngOnInit(): void {
    console.log("TodosComponent is initialized");
    console.log(this.todoService.todoItems);
    this.todoItems.set(this.todoService.todoItems)
  }
}
