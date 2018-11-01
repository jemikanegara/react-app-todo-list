import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  constructor(props) {
    super(props);
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
      todos: filteredSearch
    });
  };

  render() {
    return (
      <Context.Provider
        value={
          (this.state,
          this.handleChange,
          this.handleSubmit,
          this.handleEnter,
          this.handleDelete,
          this.handleSearch)
        }
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
export const Consumer = Context.Consumer;
