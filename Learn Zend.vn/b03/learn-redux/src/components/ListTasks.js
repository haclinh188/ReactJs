import { useSelector, useDispatch } from 'react-redux';
import { actAddTask } from '../store/actions';

function ListTasks() {
  const dispatch = useDispatch();
  const listTasks = useSelector(state => state.listTasks);

  function handleAddNew() {
    dispatch(actAddTask({
      task: {
        id: Math.floor(Math.random() * 9999),
        name: 'Test 02',
        level: 2
      }
    }))
  }

  console.log("listTasks", listTasks);
  return (
    <div>
      <h1>List Task Component</h1>
      <ul>
        {
          listTasks.map(task => <li key={task.id}>{task.name}</li>)
        }
      </ul>
      <button onClick={handleAddNew}>Add new</button>
    </div>
  )
}

export default ListTasks;