import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  style = {
    fontSize: 20,
    fontWeight: "bold"
  };

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

  render() {
    let classes = this.getClasses();

    return (
      // <div>{this.renderTags()}</div>
      <React.Fragment>
        <span style={this.style} className={classes}>
          {this.formatCode()}
        </span>
        <button style={this.style} className="btn btn-secondary btn-sm">
          haha
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul> */}
        {this.renderTags()}
      </React.Fragment>
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
