import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as action from 'src/app/filter/filter.action';
import { TodoModel } from '../models/todo.model';
import { clearTodos } from '../todo.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currenFilter: action.ValidFilters = 'all';
  filters: action.ValidFilters[] = ['all', 'completed', 'pending'];
  countPendings: number = 0;

  private store = inject(Store<AppState>);

  constructor() { }

  ngOnInit(): void {
    this.store.subscribe( state => {
      this.currenFilter = state.filter;
      this.countPendings = state.todos.filter( (todo:TodoModel) => !todo.completed ).length;
    })
  }

  changeFilter( filter: action.ValidFilters ) {
    this.store.dispatch( action.setFilter( { filter } ) )
  }

  clearCompleted() {
    this.store.dispatch( clearTodos() )
  }
}
