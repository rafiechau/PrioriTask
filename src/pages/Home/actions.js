import {
  TOGGLE_TASK_STATUS,
  TOGGLE_TASK_STATUS_FAILURE,
  TOGGLE_TASK_STATUS_SUCCESS,
  GET_ALL_TASKS_BY_USER_ID,
  SET_ALL_TASKS_BY_USER_ID,
  DELETE_TASK_BY_ID,
} from './constants';

export const getAllTasksByUserId = (id) => ({
  type: GET_ALL_TASKS_BY_USER_ID,
  id,
});

export const setAllTasksByUserId = (tasks, id) => ({
  type: SET_ALL_TASKS_BY_USER_ID,
  tasks,
  id,
});

export const toggleTaskStatus = (taskId, data) => ({
  type: TOGGLE_TASK_STATUS,
  payload: { taskId, data },
});

export const toggleTaskStatusSuccess = (updatedTask) => ({
  type: TOGGLE_TASK_STATUS_SUCCESS,
  payload: updatedTask,
});

export const toggleTaskStatusFailure = (error) => ({
  type: TOGGLE_TASK_STATUS_FAILURE,
  payload: error,
});
export const deleteTaskById = (id) => ({
  type: DELETE_TASK_BY_ID,
  id,
});
