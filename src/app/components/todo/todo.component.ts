import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todos/state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() public todo: Todo;
  constructor() { }

  ngOnInit() {
    console.log('todo.component -> todo -> ', this.todo);
  }
}
