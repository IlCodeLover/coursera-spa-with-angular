import { Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root' // This service is available in the entire application

})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      userId: 1,
      title: 'Todo 1',
      completed: false,
      id: 1
    }, {
      userId: 2,
      title: 'Todo 2',
      completed: true,
      id: 2
    }
  ]
  constructor() { }
}
