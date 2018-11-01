import React, { Component } from "react";
import AddInput from "./AddInput";
import Display from "./Display";

class Content extends Component {
  render() {
    return (
      <main className="container">
        <AddInput
          addInput={this.props.addInput}
          handleChange={this.props.handleChange}
          handleEnter={this.props.handleEnter}
          handleSubmit={this.props.handleSubmit}
        />

        <h2 style={{ textAlign: "center" }}>Todos</h2>
        {this.props.inputSearch !== "" && (
          <Display
            todos={this.props.searchTodos}
            handleDelete={this.props.handleDelete}
            handleEdit={this.props.handleEdit}
          />
        )}
        {this.props.inputSearch === "" && (
          <Display
            todos={this.props.todos}
            handleDelete={this.props.handleDelete}
            handleEditMode={this.props.handleEditMode}
            handleCancelEdit={this.props.handleCancelEdit}
            handleChange={this.props.handleChange}
            inputEdit={this.props.inputEdit}
          />
        )}
      </main>
    );
  }
}

export default Content;
