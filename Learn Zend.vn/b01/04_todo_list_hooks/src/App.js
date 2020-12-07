
import 'bootstrap3/dist/css/bootstrap.min.css';
import 'bootstrap3/dist/css/bootstrap-theme.min.css';
import './assets/style.css';

import mocksTasks from './mocks/tasks';

import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import List from './components/List';
import Form from './components/Form';
import TitleEdit from './components/Title';
import Control from './components/Control';

global.jQuery = require('jquery');
require('bootstrap3/dist/js/bootstrap');

function App() {

  const [listTasks, setListTasks] = useState(mocksTasks);
  const [isShowForm, setIsShowForm] = useState(false);
  const [strSearch, setStrSearch] = useState('');
  const [orderBy, setOrderBy] = useState('name');
  const [orderDir, setOrderDir] = useState('asc');
  const [itemSelected, setItemSelected] = useState(null); // Destructring  trong ES6

  // orderBy     : 'name',
  //       orderDir    : 'asc',
  //       itemSelected: null
  // Class gom hết state vào cùng 1 object
  // Hooks -> Tách nhỏ state ra thành nhiều biến riêng (Không nhất thiết phải là object)
  /*
    useState 
      -> là một function
      -> nhận vào giá trị khởi tạo của dữ liệu **** (Có thể nhận vào một function)
      -> trả về một array có 2 phần tử
        -> phần tử đầu tiên là state của nó 
        -> phần tử thứ hai là một function dùng để cập nhật lại state mới
  */

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem('task')) || [];
    setListTasks(items);
  }, [])

  function handleSubmit(item) {
    let newListTasks = null;
    if (item.id) {
      // Edit mode
      newListTasks = listTasks.map(oldTask => {
        if (oldTask.id === item.id) {
          return {
            ...oldTask,
            ...item
          }
        }
        return oldTask;
      });
    } else {
      // Add mode
      newListTasks = [
        ...listTasks, 
        {
          id: uuidv4(),
          name: item.name,
          level: Number(item.level)
        }
      ];
    }
    setListTasks(newListTasks);
    localStorage.setItem('task', JSON.stringify(newListTasks));
  }

  function handleEdit(task) {
    setItemSelected(task);
    setIsShowForm(true);
  }

  function handleDelete(taskId) {
    const newListTasks = listTasks
      .filter(task => task.id !== taskId);
    
    setListTasks(newListTasks);

    localStorage.setItem('task', JSON.stringify(newListTasks));
  }

  function handleSort(orderBy, orderDir) {
    setOrderBy(orderBy);
    setOrderDir(orderDir);
  }

  function handleToggleForm() {
    setIsShowForm(!isShowForm);
    setItemSelected(null);
  }

  function handleSearch(value){
    setStrSearch(value);
  }

  function closeForm() {
    setIsShowForm(false);
  }

  const tasksSearch = listTasks.filter(taskOrigin => {
    return taskOrigin.name.toLowerCase().includes(strSearch.toLowerCase());
  })

  // Bằng 0
  // Lớn hơn không
  // Nhỏ hơn không
  const tasksSort = tasksSearch.sort((taskA, taskB) => {
    let numReturn = orderDir === 'desc' ? 1 : -1;
    if (taskA[orderBy] < taskB[orderBy]) {
      return numReturn;
    }
    if (taskA[orderBy] > taskB[orderBy]) {
      return numReturn * (-1);
    }
    return 0;
  })

  return (
    <div className="container">
      {/* TITLE : START */}
      <TitleEdit />
      {/* TITLE : END */}

      {/* CONTROL (SEARCH + SORT + ADD) : START */}
      <Control 
        orderBy={orderBy}
        orderDir={orderDir}
        onClickSearchGo={handleSearch}
        onClickSort={handleSort}
        onClickAdd={handleToggleForm} 
        isShowForm={isShowForm}
      />
      {/* CONTROL (SEARCH + SORT + ADD) : END */}

      {/* FORM : START */}
      {
        isShowForm && 
        <Form 
          itemSelected={itemSelected} 
          onClickSubmit={handleSubmit} 
          onClickCancel={closeForm}
        />
      }
      {/* FORM : END */}

      {/* LIST : START */}
      <List 
        listTasks={tasksSort}
        onClickEdit={handleEdit}
        onClickDelete={handleDelete}
      />
      {/* LIST : END */}
    </div>
  );
}

export default App;
