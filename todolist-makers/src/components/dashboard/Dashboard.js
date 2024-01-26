"use client"
import "./dashboard.css";
import { useState } from "react";
import Task from "../task/Task";

const Dashboard = () =>{

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
  
    const addTask = () => {
      if (newTask.trim() !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    };
  
    const removeTask = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    };

    
    return <div className="dashboard">
        <h3>My tasks</h3> 
        <div className="new-task"><input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>+</button></div> 
        
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} index={index} task={task} removeTask={removeTask} />
        ))}
      </ul>   
    </div>
}

export default Dashboard;