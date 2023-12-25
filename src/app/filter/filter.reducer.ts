import { createReducer, on } from '@ngrx/store';
import { changeFilter, setFilter, ValidFilters } from './filter.action';

export const initialState: ValidFilters = "all" as ValidFilters;

export const filterReducer = createReducer(
  initialState,
  on(setFilter, (state, { filter }) =>  filter ),
  on( changeFilter, ( state , { filter } ) => filter )
)
