import { produce } from 'immer';

import { SET_LOGIN, SET_USER } from '@containers/Client/constants';

export const initialState = {
  login: false,
  user: null,
};

export const storedKey = ['token', 'login', 'user'];

const clientReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_LOGIN:
        draft.login = action.login;
        break;
      case SET_USER:
        draft.user = action.user;
        break;
      default:
        break;
    }
  });

export default clientReducer;