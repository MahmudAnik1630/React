import React from "react";

// function Greet() {
// return (
//     <h1 style={{ marginBottom: "50px", color: "red" }}>Hello, I am Component</h1>
// );
// }

const Greet = (props) => (
  <div>
    <h1>
      {props.name} I am your second component {props.heroname}
    </h1>
    {props.children}
  </div>
);

export default Greet;
