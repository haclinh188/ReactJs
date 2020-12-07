/* eslint-disable jsx-a11y/anchor-is-valid */

function Sort({
  orderBy,
  orderDir,
  onClickSort
}) {
  
  function handleSort(orderBy, orderDir){
    onClickSort(orderBy, orderDir);
  }

  const strSort = orderBy + " - " + orderDir;

  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Sort by <span className="caret" />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a role="button" onClick={() => handleSort('name', 'asc')}>Name ASC</a></li>
          <li><a role="button" onClick={() => handleSort('name', 'desc')}>Name DESC</a></li>
          <li role="separator" className="divider" />
          <li><a role="button" onClick={() => handleSort('level', 'asc')}>Level ASC</a></li>
          <li><a role="button" onClick={() => handleSort('level', 'desc')}>Level DESC</a></li>
        </ul>

        <span className="label label-success label-medium">{ strSort }</span>
      </div>
    </div>
  )
}

export default Sort;