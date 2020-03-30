import React from "react";
import Counter from "./counter";

export default class Counters extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm"
          style={this.style}
        >
          reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h1>haha #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}
