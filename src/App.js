import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [array, setArray] = useState([])

  //   {
  //     id: 1,
  //     todoText: "zzzzzuuuuu",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     todoText: "zzzzz",
  //     completed: true,
  //   },
  // ]);
  return (
    <div className="App">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Todolist tasks={tasks}
        setTasks={setTasks} 
        array={array}
        setArray={setArray}/>
    </div>
  );
}

export default App;
