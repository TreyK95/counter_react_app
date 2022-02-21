import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">Counter Example</h1>
        <p>{this.state.value}</p>
        <button>+</button>
        <button>-</button>
      </div>
    );
  }
}

export default App;
