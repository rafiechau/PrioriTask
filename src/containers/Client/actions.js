import { REGISTER_REQUEST, SET_LOGIN, SET_USER, } from '@containers/Client/constants';

export const setLogin = (login) => ({
  type: SET_LOGIN,
  login,
});

export const setUser = (user) => ({
  type: SET_USER,
  user,
});

export const registerRequest = (data) => ({
  type: REGISTER_REQUEST,
  data
})
