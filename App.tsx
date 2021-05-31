import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interface'
import TaskDisplay from './taskDisplay'

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [todos, setTodos] = useState<ITask[]>([]);   //We are difining it to be an type of array
  // const [keys, setKeys] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);

    }
    else {
      setDays(Number(event.target.value))
    }
  }

  const AddTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: days,   // taking the values to append in the array
      keys: Date.now()
    }
    setTodos([...todos, newTask]);    //the key value must match with the interface defined 
    console.log(todos)
    setTask("");
    setDays(0)
  }

  const handlDelete = (taskToDelete: number): void => {
    setTodos(todos.filter(todos => todos.keys !==taskToDelete))
  }

  return (
    <div className="App">
      <div className="heading">
        <div className="inputSection">
          <input type="text" value={task} className="input" name="task" onChange={handleChange} placeholder="Todos..." />
          <input type="number" value={days} className="input" name="days" onChange={handleChange} placeholder="Date" />
        </div>
        <div className="button">
          <button className="" onClick={AddTask}>Add Task</button>
        </div>
      </div>
      <div className="container">
        {todos.map((task: ITask) => {
          return <TaskDisplay task={task} handlDelete={handlDelete} />
        })}
      </div>
    </div>
  );
}

export default App;
