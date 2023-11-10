import { CREATE_TASK, RESET_ADD_TASK, SET_NEW_TASK, SET_UPDATE_TASK, UPDATE_TAKS } from './constants';

export const createTask = (data) => ({
  type: CREATE_TASK,
  data,
});
export const updateTask = (taskId, data) => ({
  type: UPDATE_TAKS,
  payload: { taskId, data },
});
export const setNewTask = () => ({
  type: SET_NEW_TASK,
});
export const setUpdatepTask = () => ({
  type: SET_UPDATE_TASK,
});
export const resetAddTask = () => ({
  type: RESET_ADD_TASK,
});
