import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: [1, 2, 43]
  };

  style = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    let classes = this.getClasses();

    return (
      // <div>{this.renderTags()}</div>
      <React.Fragment>
        <span style={this.style} className={classes}>
          {this.formatCode()}
        </span>
        <button
          onClick={this.increment}
          style={this.style}
          className="btn btn-secondary btn-sm"
        >
          haha
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul> */}
        <ul>{this.state.tags.length === 0 && "buat tag baru cok"}</ul>
        {this.renderTags()}
      </React.Fragment>
    );
  }

  increment() {
    console.log("telah di klik");
    return <p>asoidhaoisdhoi</p>;
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>gaada isinya</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCode() {
    const { count } = this.state;
    return count === 0 ? "zero asu" : count;
  }
}

export default Counter;
