import { produce } from 'immer';
import { SET_TASK_BY_ID } from './constants';

export const initialState = {
  task: {},
};

export const storedKey = ['task'];

const detailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TASK_BY_ID:
        draft.task = action.task;
        break;
    }
  });

export default detailReducer;
