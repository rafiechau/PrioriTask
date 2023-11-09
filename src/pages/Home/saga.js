import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllTasksApi } from '@domain/api';
import { setAllTasks } from './actions';
import { GET_ALL_TASKS } from './constants';

export function* doGetAllTasks() {
  try {
    const response = yield call(getAllTasksApi);
    yield put(setAllTasks(response));
  } catch (error) {
    console.log(error, '<<<Error get all tasks');
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_TASKS, doGetAllTasks);
}
