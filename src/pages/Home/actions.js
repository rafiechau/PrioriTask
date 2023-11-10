import { GET_ALL_TASKS_BY_USER_ID, SET_ALL_TASKS_BY_USER_ID } from './constants';

export const getAllTasksByUserId = (id) => ({
  type: GET_ALL_TASKS_BY_USER_ID,
  id,
});

export const setAllTasksByUserId = (tasks, id) => ({
  type: SET_ALL_TASKS_BY_USER_ID,
  tasks,
  id,
});
