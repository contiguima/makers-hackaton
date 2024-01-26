import "./task.css"
const Task = ({ task, index, removeTask }) =>{
    return (
        <li className="task">
          {task} <button className= "remove-btn" onClick={() => removeTask(index)}>X</button>
        </li>
      );
    };

export default Task