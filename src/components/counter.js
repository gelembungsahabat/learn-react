import React, { Component } from "react";

class Counter extends Component {
  style = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    let classes = this.getClasses();
    console.log("props", this.props);
    return (
      // <div>{this.renderTags()}</div>
      <React.Fragment>
        {this.props.children}
        <span style={this.style} className={classes}>
          {this.formatCode()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={this.style}
          className="btn btn-secondary btn-sm"
        >
          haha
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
          style={this.style}
        >
          delete
        </button>

        {/* <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul> */}
        {/* <ul>{this.state.tags.length === 0 && "buat tag baru cok"}</ul>
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  renderTags() {
    if (this.props.counter.tags.length === 0) return <p>gaada isinya</p>;

    return (
      <ul>
        {this.props.counter.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCode() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
