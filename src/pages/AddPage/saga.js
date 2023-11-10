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
export function* doUpdateTask(action) {
  try {
    const { taskId, data } = action.payload;
    const response = yield call(updateTask, taskId, data);
    if (response) {
      yield put(setUpdatepTask(response));
    }
  } catch (error) {
    alert("ada yang salah dari saga kamu")
  }
}

export function* addTaskSaga() {
  yield takeLatest(CREATE_TASK, doCreateTask);
  yield takeLatest(UPDATE_TAKS, doUpdateTask);
}
