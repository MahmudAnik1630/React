import React from "react";

const Gr = (props) => {
    const { name, heroname } = props;
  return (
    <div>
      <h1>
        Hello {name}, you are {heroname}
      </h1>
    </div>
  );
};

export default Gr;
