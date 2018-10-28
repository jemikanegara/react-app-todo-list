import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <main className="container">
        <div class="row">
          <div class="input-group mb-3 centering col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <input
              type="text"
              class="form-control"
              id="addInput"
              placeholder="Add new activity"
              maxlength="30"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                id="addButton"
                type="button"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Content;
