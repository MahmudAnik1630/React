import React from "react";


function FunctionClick() {

    function clickHandler() {
        console.log('Button Clicked')
    }
  return (
    <div>
      <button onClick={clickHandler} style={{ margin: "50px" }}>Click</button>
    </div>
  );
}

export default FunctionClick;
