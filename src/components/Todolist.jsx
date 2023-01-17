import React, { useState } from "react";

const Todolist = ({ tasks, setTasks, array, setArray }) => {
  const onCheck = (e)=>{
      let value = e.target.checked
      console.log(value);
      if (value = true) {
        setArray([...array,])
      }

  }
    
  return (
    <div>
      {tasks.map((each) => {
        return (
          <div key={each.id}>
            <input type="checkbox" onClick={onCheck} />
            <p>{each.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Todolist;
