import React from "react";
import Task from "../Task/Task";
import "./tasklist.css";

const TaskList = ({ tasks, deleteTask }) => {
  /* Mensaje si no hay tareas */
  const banner = tasks.length === 0 ? "Agrega una Tarea" : null;
  return (
    <>
      <div className="tasks">
        <div className="tasks__header">
          <h2 className="tasks__title">TASK LIST</h2>
          <p className="tasks__counter">{tasks.length}</p>
        </div>

        <div className="tasks__list">
          <h2 className="tasks__banner">{banner}</h2>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} deleteTask={deleteTask} />;
          })}
        </div>
        <div className="tasks__copy">
          <p className="tasks__copy-text">
            Todos los derechos reservados &copy;{new Date().getFullYear()}
          </p>
        </div>
      </div>
      <div className="tasks__footer">
        <p className="tasks__design">
          Design by{" "}
          <a
            target="_blank"
            className="tasks__link"
            href="https://www.instagram.com/manuel_entrena/"
          >
            @Manuel_Entrena
          </a>
        </p>
      </div>
    </>
  );
};

export default TaskList;
