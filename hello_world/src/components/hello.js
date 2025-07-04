import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>This is a React component.</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    null,
    //  {id: 'hello' , className: 'hello'},
    React.createElement("h1", null, "This is a React component.")
  );
};

export default Hello;
