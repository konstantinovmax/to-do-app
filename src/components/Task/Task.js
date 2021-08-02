import './Task.css';
import React from 'react';

function Task(props) {

  function deleteTask() {
    props.onDeleteTask(props.task.id);
  }

  function handleClick() {
    props.onTaskClick(props.task);
  }

  return (
    <div className="task" key={props.task.id}>
        {props.tasksEditState ? <input type="radio" className="task__radiobutton" /> : <button type="reset" className="task__delete-button" onClick={deleteTask} />}
        <p className="task__title" onClick={handleClick}>{props.task.name}</p>
    </div>
  );
}

export default Task;
