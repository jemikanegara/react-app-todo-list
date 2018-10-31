import React, { Component } from "react";
import AddInput from "./AddInput";
import Display from "./Display";

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
      searchTodos: [],
      addInput: "",
      inputSearch: ""
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
        return JSON.stringify(index) !== e.target.id;
      });

      this.setState({ todos: filteredTodos });
    }
  };

  handleSearch = async e => {
    console.log("works");
    await this.handleChange(e);
    let filteredSearch = this.state.todos.filter(
      todo => todo.task.indexOf(this.state.inputSearch) !== -1
    );

    this.setState({
      searchTodos: filteredSearch
    });
  };

  render() {
    return (
      <main className="container">
        <AddInput
          addInput={this.state.addInput}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
          handleSubmit={this.handleSubmit}
        />

        <h2 style={{ textAlign: "center" }}>Todos</h2>
        {this.state.inputSearch === "" && (
          <Display todos={this.state.todos} handleDelete={this.handleDelete} />
        )}
        {this.state.inputSearch !== "" && (
          <Display
            todos={this.state.searchTodos}
            handleDelete={this.handleDelete}
          />
        )}

        <input
          type="text"
          maxLength="20"
          className="search form-control"
          placeholder="Search . . ."
          name="inputSearch"
          onChange={this.handleSearch}
        />
      </main>
    );
  }
}

export default Content;
