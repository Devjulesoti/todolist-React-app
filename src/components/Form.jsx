import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, tasks, setTasks }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, { id: uuidv4(), title: input, completed: false }]);
    console.log(tasks.title);
    setInput("");
  };

  return (
    <div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>completed</button>
      </div>
      <form action="" onSubmit={onFormSubmit}>
        <input
          onChange={onInputChange}
          value={input}
          type="text"
          required
          placeholder="Enter Todo"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Form;
