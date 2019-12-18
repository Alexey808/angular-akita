import { Component, OnInit } from '@angular/core';
import {TodosService} from './state/todos.service';
import {TodosQuery} from './state/todos.query';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$;
  dataInput = 'test';

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
  ) {}

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
    this.todos$.subscribe(state => console.log('todos.components -> state ->', state));
  }

  addTodo() {
    this.todosService.add(this.dataInput);
    this.dataInput = '';
  }
}
