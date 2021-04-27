import React from "react";
import List from "../List/List";
import "./tasklist.css";

const TaskList = () => {
  return (
    <div className="task">
      <div className="task__header">
        <h2 className="task__title">TASK LIST</h2>
        <p className="task__counter">0</p>
      </div>

      <List />

      <div className="task__footer">
        <p className="task__design">
          Design by{" "}
          <a
            className="task__link"
            href="https://www.instagram.com/manuel_entrena/"
          >
            @Manuel_Entrena
          </a>
        </p>
      </div>
    </div>
  );
};

export default TaskList;
