import TaskItem from './Item';

// buit-in trong javascript
// map [1,2,3] -> [10,20,30]
function List({ listTasks, onClickEdit, onClickDelete }) {


  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Task</div>
      <table className="table table-hover">
          <thead>
            <tr>
              <th style={{width: '10%'}} className="text-center">#</th>
              <th>Task</th>
              <th style={{width: '20%'}} className="text-center">Level</th>
              <th style={{width: '20%'}}>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            listTasks.map(function(value, index) {
              return (
                <TaskItem 
                  task={value}
                  key={value.id}
                  onClickDelete={onClickDelete} 
                  onClickEdit={onClickEdit} 
                  index={index}
                />
              );
            })
          }
          </tbody>
      </table>
  </div>
  )
}

export default List;