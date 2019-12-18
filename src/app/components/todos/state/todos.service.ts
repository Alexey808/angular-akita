import { TodosStore } from './todos.store';
import { createTodo, Todo } from './todo.model';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private todosStore: TodosStore) {
    console.log('todos.service -> ', this);
  }

  update({ id, completed }: Todo) {
    this.todosStore.update(id, { completed });
  }

  add(title) { // todo проверить тип title
    const todo = createTodo(title);
    this.todosStore.add(todo);
  }

  delete(id: ID) {
    this.todosStore.remove(id);
  }
}
