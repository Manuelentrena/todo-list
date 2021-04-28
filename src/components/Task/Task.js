import React from "react";
import "./task.css";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h2 className="task__name">{task.nombre.toUpperCase()}</h2>
      <div className="task__header">
        <p className="task__autor">{task.autor.toUpperCase()}</p>
        <div className="task__time">
          <p className="task__date">{task.fecha}</p>
          <p className="task__hour">{task.hora}</p>
        </div>
      </div>
      <p className="task__descripcion">{task.descripcion.toUpperCase()}</p>
      <button className="task__delete" onClick={() => deleteTask(task.id)}>
        DELETE
      </button>
    </div>
  );
};

export default Task;
