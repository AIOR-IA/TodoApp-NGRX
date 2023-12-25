import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { ValidFilters } from 'src/app/filter/filter.action';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TodoModel[], filter: ValidFilters): TodoModel[] {
    switch ( filter ) {
      case 'completed':
        return  todos.filter( todo => todo.completed );
      case 'pending':
        return  todos.filter( todo => !todo.completed );
      default:
        return todos
    }
  }

}
