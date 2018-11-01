import React from "react";

const Display = props => {
  const { todos, handleDelete, handleEdit } = props;
  return (
    <div className="row">
      <div className="col-3" />
      <div className="col-6">
        <ul className="list-group">
          {todos.map((todo, index) => (
            <div className="row mb-3" key={index}>
              <li
                className="col-10 list-group-item"
                onDoubleClick={e => handleEdit(e, index)}
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
            </div>
          ))}
        </ul>
      </div>
      <div className="col-3" />
    </div>
  );
};

export default Display;
