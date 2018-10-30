import React from "react";

const AddInput = props => {
  const { addInput, handleChange, handleEnter, handleSubmit } = props;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-3" />
        <div className="input-group mb-3 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <input
            type="text"
            className="form-control"
            id="addInput"
            placeholder="Add new activity"
            maxLength="30"
            name="addInput"
            value={addInput}
            onChange={handleChange}
            onKeyDown={handleEnter}
          />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="addButton"
              type="button"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
        <div className="col-3" />
      </div>
    </React.Fragment>
  );
};

export default AddInput;
