import { produce } from 'immer';
import { DELETE_TASK_BY_ID, SET_ALL_TASKS_BY_USER_ID } from './constants';

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
      case DELETE_TASK_BY_ID:
        draft.tasks = draft.tasks.filter((task) => task.id !== action.id);
        break;
    }
  });

export default homeReducer;
