import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "Add Task Below", id: uuidv4() , completed:false}]);
  let [newTodo, setNewTodo] = useState("");

  function addNewTask() {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { task: newTodo, id: uuidv4() , completed: false}]);
    setNewTodo("");
  }

  let UpdateTaskValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    let updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  let toggleDone = (id) => {
    let updateTodos = todos.map((todo)=>
    todo.id === id
  ? {...todo, completed: !todo.completed}: todo);
  setTodos(updateTodos);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task"
        value={newTodo}
        onChange={UpdateTaskValue}
      />
      <button onClick={addNewTask}>Add Task</button>
      <br /><br /><br /><br />
      <hr />
      <h4>Task List</h4>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? 0.6 : 1
              }}
              
              >{todo.task}</span>
              &nbsp;&nbsp;&nbsp;
              <button onClick={()=> toggleDone(todo.id)}>
                {
                  todo.completed ? "Undo" : "Mark as Done"
                }
              </button>
              &nbsp;&nbsp;
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}