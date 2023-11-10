import { call, put, takeLatest } from 'redux-saga/effects';
import { deleteTaskByIdApi, getAllTasksByIdApi } from '@domain/api';
import { setAllTasksByUserId } from './actions';
import { DELETE_TASK_BY_ID, GET_ALL_TASKS_BY_USER_ID } from './constants';

export function* doGetAllTasks(action) {
  try {
    const response = yield call(getAllTasksByIdApi, action.id);
    yield put(setAllTasksByUserId(response));
  } catch (error) {
    console.log(error, '<<<Error get all tasks by id');
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
  yield takeLatest(GET_ALL_TASKS_BY_USER_ID, doGetAllTasks);
  yield takeLatest(DELETE_TASK_BY_ID, doDeleteTaskById);
}
