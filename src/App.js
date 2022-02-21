import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
class App extends Component {
  // constructor is a special method for creating and initializing an object created with a class

  render() {
    return (
      <div className="App">
        <Counter name="Red" />
        <Counter name="Green" />
        <Counter name="Blue" />
        <Counter name="Purple" />
      </div>
    );
  }
}

export default App;
