import React, { Component } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="TO DO LIST" desc="List your activity" />
        <Content />
      </div>
    );
  }
}

export default App;
