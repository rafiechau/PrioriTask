import { GET_TASK_BY_ID, SET_TASK_BY_ID } from './constants';

export const getTaskById = (id) => ({
  type: GET_TASK_BY_ID,
  id,
});

export const setTaskById = (task) => ({
  type: SET_TASK_BY_ID,
  task,
});
