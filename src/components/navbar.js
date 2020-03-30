import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.totalCounters}</h1>
      </div>
    );
  }
}
