import { Component, OnInit, inject } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ValidFilters } from 'src/app/filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
})
export class TodoListComponent implements OnInit {

  todos: TodoModel[] = [];
  currentFilter!: ValidFilters;
  private store = inject(Store<AppState>)

  ngOnInit(): void {
    this.store.subscribe( ({ filter, todos }) => {
      this.currentFilter = filter;
      this.todos         = todos;
    });
  }

}
