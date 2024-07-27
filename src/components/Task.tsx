import React from "react";

// define TaskItem interface to use as props type
interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  deleteTaskFunc: (taskId: string) => void; // callback function
  toggleDoneTaskFunc: (taskId: string) => void; // callback function
}

export default function Task({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}: TaskItemProps) {
  // callback function when delete button is clicked
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      {/*
      HINTS: if task is completed, below "span" will show like this 
        <span className="text-decoration-line-through">{title}</span>
        But if task is not completed : 
        <span>{title}</span>
        
      */
        completed ? <span className="text-decoration-line-through">{title}</span>
        : <span>{title}</span>
      }
      <button className="btn btn-success" onClick={toggleDoneBtnOnClick}>Done</button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
}