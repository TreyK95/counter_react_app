import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
class App extends Component {
  // constructor is a special method for creating and initializing an object created with a class

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Counter Example</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
