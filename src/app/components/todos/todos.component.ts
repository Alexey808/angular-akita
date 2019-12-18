import { Component, OnInit } from '@angular/core';
import {TodosService} from './state/todos.service';
import {Todo} from './state/todo.model';
import {TodosQuery} from './state/todos.query';
import {from} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$;

  constructor(
    private todosService: TodosService,
    private todosQuery: TodosQuery,
  ) {}

  ngOnInit() {
    this.todos$ = this.todosQuery.selectAll();
    this.todos$.subscribe(state => console.log('todos.components -> state ->', state));


    // this.todos = from(todos$)
    //   .pipe(
    //     scan((acc, v) => acc + v, [])
    //   )
    //   .subscribe(value => value);

    console.log('todos.components ->', this);
  }
}
