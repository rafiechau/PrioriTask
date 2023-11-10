import { produce } from 'immer';
import { SET_ALL_TASKS, TOGGLE_TASK_STATUS, TOGGLE_TASK_STATUS_SUCCESS } from './constants';

export const initialState = {
  tasks: [],
};

export const storedKey = ['tasks'];

const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ALL_TASKS:
        draft.tasks = action.tasks;
        break;
      case TOGGLE_TASK_STATUS_SUCCESS:
        const taskIndex = draft.tasks.findIndex(task => task.id === action.payload.id);
        if (taskIndex !== -1) {
          draft.tasks[taskIndex] = { ...draft.tasks[taskIndex], ...action.payload };
        }
        break;
    }
  });

export default homeReducer;
