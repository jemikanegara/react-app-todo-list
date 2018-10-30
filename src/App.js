import React, { Component } from "react";
import Content from "./Content";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header title="TO DO LIST" desc="List your activity" />
        <Content />
      </div>
    );
  }
}

export default App;
