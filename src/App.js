import { useState, useEffect } from "react";

import TaskList from "./components/TaskList/TaskList";
import TodoList from "./components/TodoList/TodoList";
import "./Style/index.css";

function App() {
  /* Tasks en localstorage */
  let taskInitials = JSON.parse(localStorage.getItem("tasks"));
  if (!taskInitials) {
    taskInitials = [];
  }
  /* Arreglo de citas */
  const [tasks, setTasks] = useState(taskInitials);

  /* Administrar LocalStorage a través de useEffect*/
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /* Funcion que agrega nueva cita */
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  /* Eliminar cita */
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks([...newTasks]);
  };

  return (
    <div className="app">
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <TodoList addTask={addTask} />
    </div>
  );
}

export default App;
