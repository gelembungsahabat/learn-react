import React from "react";
import logo from "./logo.svg";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

export default class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("event handle called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    console.log(counter);
    var counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters = this.state.counters.map(c => {
      c.value = c.value * 1600;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <h1>hahaha</h1>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}
