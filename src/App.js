import TaskList from "./components/TaskList/TaskList";
import TodoList from "./components/TodoList/TodoList";
import "./Style/index.css";

function App() {
  return (
    <div className="app">
      <TaskList />
      <TodoList />
    </div>
  );
}

export default App;
