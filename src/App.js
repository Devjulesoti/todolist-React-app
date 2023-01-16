import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  let inputRef = useRef();
  let checkRef = useRef()
  let pRef = useRef()
  const [tasks, setTasks] = useState([]);
  const [active, setActive] = useState([])
  const [completed, setCompleted] = useState([])

const addActive= ()=>{
console.log('working');
}

  const addTodo = () => {
    let inputValue = inputRef.current.value;
    setTasks((prevTasks) => [...prevTasks, inputValue]);
    
    console.log(tasks);
  };

  return (
    <div className="App">
      <div>
        <button >All</button>
        <button onClick={addActive}>Active</button>
        <button>Completed</button>
      </div>
      <input ref={inputRef} type="text" placeholder="Add details" />
      <button onClick={addTodo}>Add</button>

      {tasks.map((each, index) => {
        return(
          <div>
            <input ref={checkRef} type="checkbox" />
                    <p ref={pRef} key={index}>{each}</p>

          </div>
        )
      })}
    </div>
  );
}

export default App;
