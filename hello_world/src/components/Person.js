import React from "react";
import PersonList from "./PersonList"; // Capital name

function Person() {
  const person = [
    {
      name: "Anik",
      age: 30,
      profession: "Developer",
    },
    {
      name: "Anika",
      age: 35,
      profession: "Superman",
    },
    {
      name: "Habib",
      age: 28,
      profession: "Antman",
    },
  ];

  const personList = person.map((p) => (
    <PersonList  person={p} />
  ));

  return (
    <div>
      <h1>List of Persons</h1>
      {personList}
    </div>
  );
}

export default Person;
