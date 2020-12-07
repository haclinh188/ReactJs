import { createStore } from 'redux'
console.log("createStore", createStore);
const ACT_ADD_TASK = 'ACT_ADD_TASK';
// const ACT_REMOVE_TASK = 'ACT_ADD_REMOVE';
const ACT_EDIT_TASK = 'ACT_ADD_EDIT';
// const ACT_CHANGE_SHOW_FORM = 'ACT_TOGGLE_SHOW_FORM';

// Redux 
// React Redux

// Props down
// Giữa component với nhau muốn xài chung data 
//  -> Chọn 1 điểm giao chung nào đó ở thằng cha (Nắm giữ data)


// Store -> Làm sao tạo ra được một cái store
// Action 
//  -> Là một object thuần trong javascript có một thuộc tính `type`
//  -> Action mặc định là một tác vụ đồng bộ
// Reducer -> Là một hàm nhận vào state hiện tại và action xử lý

// Khởi tạo giá trị mặc định cho state trong redux
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

function todoReducer(state = initalState, action) {
  switch (action.type) {
    case ACT_ADD_TASK:
      const task = action.payload.task;
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


// Khi truyền reducer vào store chạy hàm reducer để thiết lập state ban đầu
// Sau đó nếu như có một action được kích hoạt -> reducer chạy thêm lần nữa sau mỗi action
const store = createStore(todoReducer);

console.log("store", store);
console.log("store.getState()", store.getState());


function actActionEdit({ task = { name: '', level: 0 } } = {}) {
  return {
    type: ACT_EDIT_TASK, // Bắt buộc truyền vào type
  
    // Những tham số phía dưới là do mình tự định nghĩa
    payload: { task }
  }
}


setTimeout(() => {
  store.dispatch(actActionEdit({ task: { id: 1231, name: 'sau khi edit thanh cong', level: 2 } }));
  console.log("sau khi edit id 1231", store.getState());
}, 5000);

// Để kích hoặc được `action` -> Trong redux thuật ngữ là dispatch một action