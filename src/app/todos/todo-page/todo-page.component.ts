import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  private store = inject( Store<AppState>);

  constructor() { }

  isCompleted: boolean = false;

  toggleAll() {
    this.isCompleted = !this.isCompleted;
    this.store.dispatch( actions.toggleAll({ completed: this.isCompleted }) );
  }
}
