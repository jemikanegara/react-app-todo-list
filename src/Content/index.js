import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "eat",
          done: false
        },
        {
          task: "work",
          done: false
        },
        {
          task: "sleep",
          done: true
        }
      ],
      addInput: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    if (this.state.addInput === "") {
      alert("input field cannot be empty");
    } else {
      let newTodo = this.state.todos.concat({
        task: this.state.addInput,
        done: false
      });

      this.setState({
        todos: newTodo,
        addInput: ""
      });
    }
  };

  handleEnter = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  handleDelete = e => {
    if (window.confirm("Are you sure want to delete this item?")) {
      const filteredTodos = this.state.todos.filter((todo, index) => {
        console.log(index);
        return JSON.stringify(index) !== e.target.id;
      });
      console.log(filteredTodos);
      this.setState({ todos: filteredTodos });
    }
  };

  render() {
    return (
      <main className="container">
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
              value={this.state.addInput}
              onChange={this.handleChange}
              onKeyDown={this.handleEnter}
            />

            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                id="addButton"
                type="button"
                onClick={this.handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
          <div className="col-3" />
        </div>

        <h2 style={{ textAlign: "center" }}>Todos</h2>
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <ul className="list-group">
              {this.state.todos.map((todo, index) => (
                <div className="row mb-3" key={index}>
                  <li className="col-10 list-group-item">{todo.task}</li>
                  <button
                    className="col-1 btn btn-danger"
                    onClick={this.handleDelete}
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
      </main>
    );
  }
}

export default Content;
