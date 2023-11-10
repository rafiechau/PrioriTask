import { call, put, takeLatest } from 'redux-saga/effects';
import { createTask, updateTask } from '@domain/api';
import { CREATE_TASK, UPDATE_TAKS } from './constants';
import { setNewTask, setUpdatepTask } from './actions';

export function* doCreateTask({ data }) {
  try {
    const response = yield call(createTask, data);
    if (response) {
      yield put(setNewTask());
      alert('Journey Created');
    }
  } catch (error) {
    alert('Create Task Error', +error.message);
  }
}
export function* doUpdateTask({ taskId, data }) {
  try {
    const response = yield call(updateTask, taskId, data);
    if (response) {
      yield put(setUpdatepTask());
      alert('Jorney Updated');
    }
  } catch (error) {
    // alert('Update Task Error', + error.message);
    console.log(error);
  }
}

export function* addJorneySaga() {
  yield takeLatest(CREATE_TASK, doCreateTask);
  yield takeLatest(UPDATE_TAKS, doUpdateTask);
}
