import { produce } from 'immer';

import { REGISTER_REQUEST, SET_LOGIN, SET_USER } from '@containers/Client/constants';

export const initialState = {
  login: false,
  user: null,
  data: null
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
      case REGISTER_REQUEST:
        draft.data = action.data
      default:
        break;
    }
  });

export default clientReducer;