import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import loginSaga from '@pages/Login/saga';
import homeSaga from '@pages/Home/saga';
import detailSaga from '@pages/DetailPage/saga';
import registerSaga from '@pages/Register/saga';
import { addTaskSaga } from '@pages/AddPage/saga';

export default function* rootSaga() {
  yield all([appSaga(), homeSaga(), detailSaga(), addTaskSaga(), loginSaga(), registerSaga()]);
}
