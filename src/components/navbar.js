import React from "react";
import { render } from "@testing-library/react";

function TodoList({ totalCounters }) {
  return totalCounters.map(data => <h1>{data.value}</h1>);
}

export default TodoList;
