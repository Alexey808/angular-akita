
import {QueryEntity} from '@datorama/akita';
import {Injectable} from '@angular/core';
import {Todo} from './todo.model';
import {TodosState, TodosStore} from './todos.store';

@Injectable({
  providedIn: 'root'
})
export class TodosQuery extends QueryEntity<TodosState, Todo>  {
  constructor(protected store: TodosStore) {
    super(store);
    console.log('todos.query -> ', this);
  }
}
