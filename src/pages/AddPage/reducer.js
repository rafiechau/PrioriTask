import { produce } from 'immer';
import { CREATE_TASK, RESET_ADD_TASK, SET_NEW_TASK, SET_UPDATE_TASK, UPDATE_TAKS } from './constants';

export const initialState = {
  tasks: [],
  createDataStatus: false,
  updatedTaskStatus: false,
};

const addTaskReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_TASK:
        // Menambahkan task baru ke dalam array 'tasks'
        draft.tasks.push(action.data);
        draft.createDataStatus = true;
        break;
      case UPDATE_TAKS:
        // Mencari dan memperbarui task berdasarkan ID
        const taskIndex = draft.tasks.findIndex(task => task.id === action.taskId);
        if (taskIndex !== -1) {
          draft.tasks[taskIndex] = { ...draft.tasks[taskIndex], ...action.data };
        }
        draft.createDataStatus = true;
        break;
      case SET_NEW_TASK:
        draft.createDataStatus = true;
        break;
      case RESET_ADD_TASK:
        draft.createDataStatus = false;
        draft.updatedTaskStatus = false;
        break;
    }
  });

export default addTaskReducer;
