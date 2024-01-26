"use client"
import "./dashboard.css";
import { useState, useEffect } from "react";
import Task from "../task/Task";
import { saveToLocalStorage, loadFromLocalStorage } from "@/utils/localStorageUtils";
const Dashboard = () =>{

    const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const savedTasks = loadFromLocalStorage('tasks');
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim() !== '') {
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      saveToLocalStorage('tasks', updatedTasks);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    saveToLocalStorage('tasks', updatedTasks);
  };
    
    return <div className="dashboard">
        <h3>My tasks</h3> 
        <div className="new-task"><input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
        maxLength={80} 
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