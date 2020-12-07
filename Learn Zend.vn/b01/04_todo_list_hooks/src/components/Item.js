import React from 'react';
import cls from 'classnames';

const mapLevelToString = {
  0: 'Small',
  1: 'Medium',
  2: 'High',
}

function TaskItem({ task, index, onClickEdit, onClickDelete }) {

  function handleEdit(item) {
    onClickEdit(item);
  }

  function handleDelete(id) {
    onClickDelete(id);
  }

  const classLabel = cls('label', {
    'label-default': task.level === 0,
    'label-info': task.level === 1,
    'label-danger': task.level === 2,
  });

  return (
    <tr>
      <td className="text-center" style={{ width: '10%' }}>{ index + 1 }</td>
      <td>{ task.name }</td>
      <td className="text-center" style={{ width: '20%' }}>
        <span className={classLabel}>{ mapLevelToString[task.level] }</span>
      </td>
      <td style={{ width: '20%' }}>
        {/* Edit */}
        <button 
          onClick={() => handleEdit(task)}  
          type="button" 
          className="btn btn-warning">Edit</button>
        
        {/* Delete */}
        <button 
          onClick={() => handleDelete(task.id)} 
          type="button" 
          className="btn btn-danger">Delete</button>
      </td>
    </tr>
  )
}

export default TaskItem;