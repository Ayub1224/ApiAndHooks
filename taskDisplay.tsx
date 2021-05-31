import React from 'react'
import { ITask } from './interface'
import './App.css'

interface props {
    task: ITask;
    handlDelete(taskToDelete: number):void;
}

const TaskDisplay = ({ task, handlDelete }: props) => {
    return (
        <div key={task.keys} className="Task">
            <div className="content"><span>{task.deadline}</span> <span>{task.taskName}</span></div>
            <button className="Btn" onClick={()=>{handlDelete(task.keys)}}>X</button>

        </div>
    )
}

export default TaskDisplay
