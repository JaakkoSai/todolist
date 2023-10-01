import { useState } from "react";
import TodoTable from "./TodoTable";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();

    setTodos([todo, ...todos]);

    setTodo({ description: "", date: "" });
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      <input
        type="text"
        name="description"
        onChange={inputChanged}
        value={todo.description}
      />
      <input
        type="date"
        name="date"
        onChange={inputChanged}
        value={todo.date}
      />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default Todolist;
