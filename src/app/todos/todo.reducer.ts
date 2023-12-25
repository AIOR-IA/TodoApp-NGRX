import { createReducer, on } from '@ngrx/store';
import { clearTodos, create, edit, remove, toggle, toggleAll } from './todo.action';
import { TodoModel } from './models/todo.model';
import { Uuid } from '../config';

export const initialState: TodoModel[] = [
  new TodoModel( Uuid.v4(), 'Save World' ),
  new TodoModel( Uuid.v4(), 'Buy Fish' ),
  new TodoModel( Uuid.v4(), 'Watch TV' ),
  new TodoModel( Uuid.v4(), 'Read many books' ),

];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { task }) => [...state, new TodoModel( Uuid.v4(), task)]  ),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if( todo.id === id ) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    })
  } ),
  on(edit, (state, { id, task }) => {
    return state.map( todo => {
      if( todo.id === id ) {
        return {
          ...todo,
          task
        }
      } else {
        return todo
      }
    })
  } ),
  on( remove, (state, { id }) => state.filter( todo => todo.id !== id )),
  on( toggleAll, ( state, { completed }) => state.map(  todo => {
    return {
      ...todo,
      completed
    }
  })),
  on( clearTodos, (state) => state.filter( todo => !todo.completed )),
)
