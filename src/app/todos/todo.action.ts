import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO Component] create todo',
  props<{task: string}>(),
);

export const toggle = createAction(
  '[TODO Component] toggle todo',
  props<{id: string}>(),
);

export const edit = createAction(
  '[TODO Component] edit todo',
  props<{id: string, task: string}>(),
);

export const remove = createAction(
  '[TODO Component] remove todo',
  props<{id: string}>(),
);


export const toggleAll = createAction(
  '[TODO Component] toggleAll todo',
  props<{completed: boolean}>(),
);


