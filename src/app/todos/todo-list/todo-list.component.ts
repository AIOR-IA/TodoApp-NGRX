import { Component, OnInit, inject } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = [];

  private store = inject(Store<AppState>)

  ngOnInit(): void {
    this.store.select('todos').subscribe( todos => this.todos = todos);
  }

}
