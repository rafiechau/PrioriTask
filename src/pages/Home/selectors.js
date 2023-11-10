import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHomeState = (state) => state.home || initialState;

export const selectTasks = createSelector(selectHomeState, (state) => state.tasks);
