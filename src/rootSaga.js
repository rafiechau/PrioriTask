import { all } from 'redux-saga/effects';

import appSaga from '@containers/App/saga';
import { addJorneySaga } from '@pages/AddPage/saga';

export default function* rootSaga() {
  yield all([appSaga(), addJorneySaga()]);
}
