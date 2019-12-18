import { Todo } from './todo.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';
import { Injectable } from '@angular/core';

export interface TodosState extends EntityState<Todo> {}

const initialState = {
  todos: [
    { id: 1, title: 'title_1', completed: true },
    { id: 2, title: 'title_2', completed: true },
    { id: 3, title: 'title_3', completed: false }
  ]
};

const getInitState = () => {
  return  {
    todos: [
      { id: 1, title: 'title_1', completed: true },
      { id: 2, title: 'title_2', completed: true },
      { id: 3, title: 'title_3', completed: false }
    ]
  };
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'todos' })
export class TodosStore extends EntityStore<TodosState, Todo> {
  constructor() {
    super(getInitState());
    console.log('todos.state -> ', this);
  }
}
