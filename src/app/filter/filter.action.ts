import { createAction, props } from '@ngrx/store';

export type ValidFilters = "all" | "completed" | "pending";

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{ filter: ValidFilters }>()
);

export const changeFilter = createAction(
  '[Filter] Change Filter',
  props<{ filter: ValidFilters }>()
);
