import React from 'react';

function PersonList(props) {
  const { name, age, profession } = props.person;

  return (
    <div>
      <h1>
        I am {name}, my age is {age}, and I work as a {profession}.
      </h1>
    </div>
  );
}

export default PersonList;
