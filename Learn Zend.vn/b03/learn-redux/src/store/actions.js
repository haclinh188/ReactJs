export const ACT_ADD_TASK = 'ACT_ADD_TASK';
// const ACT_REMOVE_TASK = 'ACT_ADD_REMOVE';
export const ACT_EDIT_TASK = 'ACT_ADD_EDIT';
// const ACT_CHANGE_SHOW_FORM = 'ACT_TOGGLE_SHOW_FORM';


export function actEditTask({ task } = {}) {
  return {
    type: ACT_EDIT_TASK, // Bắt buộc truyền vào type
  
    // Những tham số phía dưới là do mình tự định nghĩa
    payload: { task }
  }
}

export function actAddTask({ task } = {}) {
  console.log("2. actAddTask run");
  return {
    type: ACT_ADD_TASK,
    payload: { task }
  }
}