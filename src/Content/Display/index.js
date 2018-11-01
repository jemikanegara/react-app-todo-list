import React from "react";

const Display = props => {
  const {
    todos,
    handleDelete,
    handleEditMode,
    handleCancelEdit,
    handleChange,
    inputEdit
  } = props;
  return (
    <div className="row">
      <div className="col-3" />
      <div className="col-6">
        <ul className="list-group">
          {todos.map((todo, index) => (
            <div className="row mb-3" key={index}>
              {todo.edit === false && (
                <React.Fragment>
                  <li
                    className="col-10 list-group-item"
                    onDoubleClick={e => handleEditMode(e, index)}
                  >
                    {todo.task}
                  </li>
                  <button
                    className="col-1 btn btn-danger"
                    onClick={handleDelete}
                    id={index}
                  >
                    X
                  </button>
                </React.Fragment>
              )}

              {todo.edit === true && (
                <React.Fragment>
                  <input
                    className="col-10 list-group-item"
                    name="inputEdit"
                    value={inputEdit}
                    onChange={handleChange}
                    placeholder={todo.task}
                  />
                  <button
                    className="col-1 btn btn-warning"
                    onClick={e => handleCancelEdit(e, index)}
                    id={index}
                  >
                    X
                  </button>
                </React.Fragment>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="col-3" />
    </div>
  );
};

export default Display;
