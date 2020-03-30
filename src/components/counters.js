import React from "react";
import Counter from "./counter";

export default class Counters extends React.Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm"
          style={this.style}
        >
          reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          >
            <h1>haha #{counter.id}</h1>
          </Counter>
        ))}
      </div>
    );
  }
}
