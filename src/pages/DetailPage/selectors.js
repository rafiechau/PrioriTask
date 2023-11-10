import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDetailState = (state) => state.detail || initialState;

export const selectTaskById = createSelector(selectDetailState, (state) => state.task);
