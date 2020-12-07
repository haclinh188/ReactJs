import { ACT_ADD_TASK, ACT_EDIT_TASK } from './actions';

const initalState = {
  listTasks: [
    { id: 1231, name: 'ban dau', level: 0 }
  ],
  isShowForm: false,
  strSearch: '',
  orderBy: 'name',
  orderDir: 'asc',
  itemSelected: null
}

export default function todoReducer(state = initalState, action) {
  console.log('3. todoReducer', action);
  switch (action.type) {
    case ACT_ADD_TASK:
      const task = action.payload.task;
      if (!task) return state;

      return {
        ...state,
        listTasks: [
          ...state.listTasks,
          {
            id: Math.floor(Math.random() * 9999),
            ...task,
          }
        ]
      }
    case ACT_EDIT_TASK:
      const newTask = action.payload.task;
      if (!newTask) return state;

      const listTasks = state.listTasks.map((oldTask) => {
        if (oldTask.id === newTask.id) {
          return {
            ...oldTask,
            ...newTask
          }
        } 
        return oldTask;
      })
      return {
        ...state,
        listTasks
      }
    default:
      return state;
  }
}