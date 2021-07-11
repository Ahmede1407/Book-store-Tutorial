import React from "react";

import ReactDom from "react-dom";

function Greating() {
  return <h4>Hello, this is Ahmed and this is my first Component</h4>;
}

ReactDom.render(<Greating />, document.getElementById("root"));
