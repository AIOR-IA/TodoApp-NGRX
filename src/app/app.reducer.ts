import { ActionReducerMap } from "@ngrx/store";
import { TodoModel } from "./todos/models/todo.model";
import { ValidFilters } from "./filter/filter.action";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./filter/filter.reducer";

export interface AppState {
  todos:TodoModel[],
  filter: ValidFilters,
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
