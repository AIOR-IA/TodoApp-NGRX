import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../todo.action';
import { AppState } from 'src/app/app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  private fb = inject( FormBuilder );
  private store = inject( Store<AppState> );
  isFieldInFocus: boolean = false;

  constructor() {}

  myForm: FormGroup = this.fb.group({
    task: ['', [Validators.required, Validators.minLength(5)]],
  })

  onSave() {
    if( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    this.store.dispatch( actions.create( { task: this.myForm.value.task } ) )
    this.myForm.reset({ task: ''})
  }

  isValidField( field: string ): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
      && !this.isFieldInFocus;
  }

  getFieldError( field: string ): string | null{
    if( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch( key) {
        case 'required':
          return `This field ${ field } is required`
        case 'minlength':
          return `Min ${ errors['minlength'].requiredLength } characters`;
      }
    }
    return null;
  }

  onFocus() {
    this.isFieldInFocus = false;
  }

  onBlur() {
    this.isFieldInFocus = true;
  }
}
