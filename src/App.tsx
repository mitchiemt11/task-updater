import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';

const App:FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value))
    }
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            name="task"
            type="text" 
            placeholder='Task....'  
            onChange={handleChange}
          />
          <input
            name="deadline"
            type="number"
            placeholder='Deadline in days....'
          />
        </div>
        <button>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
