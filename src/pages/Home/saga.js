import { call, put, takeLatest } from 'redux-saga/effects';
import { getAllTasksByIdApi } from '@domain/api';
import { setAllTasksByUserId } from './actions';
import { GET_ALL_TASKS_BY_USER_ID } from './constants';

export function* doGetAllTasks(action) {
  try {
    const response = yield call(getAllTasksByIdApi, action.id);
    yield put(setAllTasksByUserId(response));
  } catch (error) {
    console.log(error, '<<<Error get all tasks by id');
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_TASKS_BY_USER_ID, doGetAllTasks);
}
