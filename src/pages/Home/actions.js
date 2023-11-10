import {
  GET_ALL_TASKS,
  SET_ALL_TASKS,
  TOGGLE_TASK_STATUS,
  TOGGLE_TASK_STATUS_FAILURE,
  TOGGLE_TASK_STATUS_SUCCESS,
} from './constants';

export const getAllTasks = () => ({
  type: GET_ALL_TASKS,
});

export const setAllTasks = (tasks) => ({
  type: SET_ALL_TASKS,
  tasks,
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

// export const toggleTaskStatus = (taskId, newStatus) => ({
//   type: TOGGLE_TASK_STATUS,
//   payload: { taskId, newStatus },
// });

// export const toggleTaskStatusSuccess = (updatedTask) => ({
//   type: TOGGLE_TASK_STATUS_SUCCESS,
//   payload: updatedTask,
// });

// export const toggleTaskStatusFailure = (error) => ({
//   type: TOGGLE_TASK_STATUS_FAILURE,
//   payload: error,
// });
