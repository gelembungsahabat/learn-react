import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: [1, 2, 43]
  };

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

  increment = () => {
    console.log("telah di klik");
    this.setState({ value: this.state.value + 1 });
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

  getClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCode() {
    const { value } = this.state;
    return value === 0 ? "zero asu" : value;
  }
}

export default Counter;
