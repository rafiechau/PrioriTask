import { produce } from 'immer';
import { SET_ALL_TASKS_BY_USER_ID } from './constants';

export const initialState = {
  tasks: [],
};

export const storedKey = ['tasks'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_TASKS_BY_USER_ID:
        draft.tasks = action.tasks;
        break;
    }
  });

export default homeReducer;
