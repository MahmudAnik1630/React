import React from "react";

function NameList() {
  const names = ["Anik", "Anika", "Habib", "Joya", "Arafat", "jeba"];
  
  const nameList = names.map((name) => <h1 >{name}</h1>);

  return (
    <div>
      <h1>List of Names</h1>

      {
    //   names.map((names) => (<h1>{names}</h1>)) 

        nameList
      
      }
    </div>
  );
}

export default NameList;
