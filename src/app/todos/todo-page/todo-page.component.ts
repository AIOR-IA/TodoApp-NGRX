import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  private store = inject( Store<AppState>);

  constructor() { }

  isCompleted: boolean = false;

  ngOnInit(): void {
  }

  toggleAll() {
    this.isCompleted = !this.isCompleted;
    this.store.dispatch( actions.toggleAll({ completed: this.isCompleted }) );
  }
}
