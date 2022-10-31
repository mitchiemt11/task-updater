import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import { ITask } from './Interfaces';

const App:FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value))
    }
  }

  const addTask = () => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('')
    setDeadline(0)
  }
  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            name="task"
            value={task}
            type="text" 
            placeholder='Task....'  
            onChange={handleChange}
          />
          <input
            value={deadline}
            name="deadline"
            type="number"
            placeholder='Deadline in days....'
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList"></div>
    </div>
  );
}

export default App;
