import { Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todo!:TodoModel;

  @ViewChild('inputCheck')
  txtinputCheck!: ElementRef;

  private fb = inject( FormBuilder );
  private store = inject( Store<AppState> );
  editing: boolean = false;

  constructor() { }

  myForm: FormGroup = this.fb.group({
    isCompleted: [false],
    text : ['', [Validators.required, Validators.minLength(5)]],
  })

  ngOnInit(): void {
    const state = this.todo.completed;
    const text = this.todo.task;
    this.myForm.get('isCompleted')!.setValue(state);
    this.myForm.get('text')!.setValue(text);

    this.myForm.get('isCompleted')!.valueChanges.subscribe(newValue => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) )
    });
  }

  edit() {
    this.editing = true;
    this.myForm.get('text')!.setValue(this.todo.task);

    setTimeout(() => {
      this.txtinputCheck.nativeElement.select();

    }, 1);
  }

  finishEdit() {
    this.editing = false;
    const newTextValue = this.myForm.get('text')!.value;
    if(this.myForm.get('text')?.invalid) return;
    if( newTextValue === this.todo.task) return;
    this.store.dispatch( actions.edit({ id: this.todo.id, task: newTextValue }))
  }

  removeTodo() {
    this.store.dispatch( actions.remove({ id: this.todo.id }) );
  }

}
