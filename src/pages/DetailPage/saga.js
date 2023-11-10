import { getTaskByIdApi } from '@domain/api';
import { call, put, takeLatest } from 'redux-saga/effects';
import { setTaskById } from './actions';
import { GET_TASK_BY_ID } from './constants';

export function* doGetTaskById(action) {
  try {
    const response = yield call(getTaskByIdApi, action.id);
    yield put(setTaskById(response));
  } catch (error) {
    console.log(error, '<<<Error get task by id');
  }
}

export default function* detailSaga() {
  yield takeLatest(GET_TASK_BY_ID, doGetTaskById);
}
