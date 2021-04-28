import React from "react";
import Form from "../Form/Form";
import Blob from "../Blob/Blob";

import "./todolist.css";

const TodoList = ({ addTask }) => {
  return (
    <div className="todo">
      <Blob color="#F27482" position="top" />
      <h1 className="todo__title">TODO-LIST</h1>
      <p className="todo__subtitle">Shirley 💚</p>
      <Form addTask={addTask} />
      <Blob color="#3CC1BC" position="bottom" />
    </div>
  );
};

export default TodoList;
