import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllTasksApi, updateTaskApi } from '@domain/api';
import { setAllTasks, toggleTaskStatusFailure, toggleTaskStatusSuccess } from './actions';
import { GET_ALL_TASKS, TOGGLE_TASK_STATUS } from './constants';

export function* doGetAllTasks() {
  try {
    const response = yield call(getAllTasksApi);
    yield put(setAllTasks(response));
  } catch (error) {
    console.log(error, '<<<Error get all tasks');
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

export default function* homeSaga() {
  yield takeLatest(GET_ALL_TASKS, doGetAllTasks);
  yield takeLatest(TOGGLE_TASK_STATUS, doToggleTaskStatus);
}
