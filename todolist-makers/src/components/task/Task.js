import React, { useState } from "react";
import "./task.scss";
import pencilLogo from "../../../public/pencil-tool.png"
import saveLogo from "../../../public/save-file.png"
import Image from "next/image";

const Task = ({ task, index, removeTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTask(task);
  };

  const handleSaveEdit = () => {
    if (editedTask.trim() !== "") {
      updateTask(index, editedTask);
      setIsEditing(false);
    }
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  return (
    <li className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={editedTask}
            onChange={handleChange}
            maxLength={80}
          />
          <button className="save-btn" onClick={handleSaveEdit}>
          <Image className="img-btn" src={saveLogo}/>
          </button>
          <button className="remove-btn" onClick={handleCancelEdit}>
            X
          </button>
        </>
      ) : (
        <>
          {task}{" "}
          <div className="buttons">
          <button className="edit-btn" onClick={handleEditClick}>
              <Image className="img-btn" src={pencilLogo}/>
            </button>
            <button className="remove-btn" onClick={() => removeTask(index)}>
              X
            </button>
            
          </div>
        </>
      )}
    </li>
  );
};

export default Task;
