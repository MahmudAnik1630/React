import React from "react";

// function Greet() {
// return (
//     <h1 style={{ marginBottom: "50px", color: "red" }}>Hello, I am Component</h1>
// );
// }

const Gre = ({name,heroname}) => (
  <div>
    <h1>
     Hello  {name} you are  {heroname}
    </h1>
  </div>
);

export default Gre;
