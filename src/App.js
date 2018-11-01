import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "eat",
          done: false,
          edit: false
        },
        {
          task: "work",
          done: false,
          edit: false
        },
        {
          task: "sleep",
          done: true,
          edit: false
        }
      ],
      searchTodos: [],
      addInput: "",
      inputSearch: "",
      inputEdit: ""
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
    await this.handleChange(e);
    let filteredSearch = this.state.todos.filter(
      todo => todo.task.indexOf(this.state.inputSearch) !== -1
    );
    this.setState({
      searchTodos: filteredSearch
    });
  };

  handleEditMode = async (e, indexClick) => {
    let editMode = this.state.todos.filter(
      (todo, index) => indexClick === index
    );

    editMode[0].edit = true;

    // let trueMode = this.state.todos.filter((todo, index) => todo.edit === true);

    // let falseMode = this.state.todos.filter(
    //   (todo, index) => indexClick !== index && todo.edit === false
    // );

    // let newMode = falseMode.concat(trueMode);

    this.setState({ todos: this.state.todos });

    // await this.setState({
    //   : true,
    //   editValue: e.target.value
    // });
    // let li = e.target.parentNode;
    // li.innerHTML = `<input class="col-10 list-group-item" type="text" value="${
    //   li.children[0].textContent
    // }" />`;
  };

  handleCancelEdit = (e, indexClick) => {
    let editMode = this.state.todos.filter(
      (todo, index) => indexClick === index
    );

    editMode[0].edit = false;

    // let trueMode = this.state.todos.filter(todo => todo.edit === true);

    // let falseMode = this.state.todos.filter(
    //   (todo, index) => todo.edit === false
    // );

    // let newMode = falseMode.concat(trueMode);

    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
      <div>
        <Header
          title="TO DO LIST"
          desc="List your activity"
          handleSearch={this.handleSearch}
        />
        <Content
          addInput={this.state.addInput}
          handleChange={this.handleChange}
          handleEnter={this.handleEnter}
          handleSubmit={this.handleSubmit}
          inputSearch={this.state.inputSearch}
          searchTodos={this.state.searchTodos}
          handleDelete={this.handleDelete}
          handleEditMode={this.handleEditMode}
          handleCancelEdit={this.handleCancelEdit}
          inputEdit={this.state.inputEdit}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
