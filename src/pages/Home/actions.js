import { GET_ALL_TASKS, SET_ALL_TASKS } from './constants';

export const getAllTasks = () => ({
  type: GET_ALL_TASKS,
});

export const setAllTasks = (tasks) => ({
  type: SET_ALL_TASKS,
  tasks,
});
