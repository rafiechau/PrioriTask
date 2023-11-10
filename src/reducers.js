import { combineReducers } from 'redux';

import appReducer, { storedKey as storedAppState } from '@containers/App/reducer';
import clientReducer, { storedKey as storedClientState } from '@containers/Client/reducer';
import homeReducer, { storedKey as storedHomeState } from '@pages/Home/reducer';
import detailReducer, { storedKey as storedDetailState } from '@pages/DetailPage/reducer';
import languageReducer from '@containers/Language/reducer';

import addTaskReducer from '@pages/AddPage/reducer';
import { mapWithPersistor } from './persistence';

const storedReducers = {
  app: { reducer: appReducer, whitelist: storedAppState },
  client: { reducer: clientReducer, whitelist: storedClientState },
  addPage: { reducer: addTaskReducer },
  home: { reducer: homeReducer, whitelist: storedHomeState },
  detail: { reducer: detailReducer, whitelist: storedDetailState },
};

const temporaryReducers = {
  language: languageReducer,
};

const createReducer = () => {
  const coreReducer = combineReducers({
    ...mapWithPersistor(storedReducers),
    ...temporaryReducers,
  });
  const rootReducer = (state, action) => coreReducer(state, action);
  return rootReducer;
};

export default createReducer;
