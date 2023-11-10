import { call, put, takeLatest } from 'redux-saga/effects';
import { updateTaskApi, getAllTasksByIdApi, deleteTaskByIdApi } from '@domain/api';
import { toggleTaskStatusFailure, toggleTaskStatusSuccess, setAllTasksByUserId } from './actions';
import { TOGGLE_TASK_STATUS, GET_ALL_TASKS_BY_USER_ID, DELETE_TASK_BY_ID } from './constants';

export function* doGetAllTasks(action) {
  try {
    const response = yield call(getAllTasksByIdApi, action.id);
    yield put(setAllTasksByUserId(response));
  } catch (error) {
    console.log(error, '<<<Error get all tasks by id');
  }
}

export function* doToggleTaskStatus(action) {
  try {
    const { taskId, data } = action.payload;
    const updatedTask = yield call(updateTaskApi, taskId, data);
    yield put(toggleTaskStatusSuccess(updatedTask));
  } catch (error) {
    // Dispatch a failure action with the error message
    yield put(toggleTaskStatusFailure(error.message));
  }
}
export function* doDeleteTaskById(action) {
  try {
    yield call(deleteTaskByIdApi, action.id);
  } catch (error) {
    console.log(error, '<<<Error deleting task by id');
  }
}

export default function* homeSaga() {
  yield takeLatest(TOGGLE_TASK_STATUS, doToggleTaskStatus);
  yield takeLatest(GET_ALL_TASKS_BY_USER_ID, doGetAllTasks);
  yield takeLatest(DELETE_TASK_BY_ID, doDeleteTaskById);
}
