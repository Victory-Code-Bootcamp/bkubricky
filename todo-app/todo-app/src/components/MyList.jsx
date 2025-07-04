import React, { useState } from "react";

const initialTodos = [
  { id: 1, text: "Take out trash", completed: false },
  { id: 2, text: "Complete Homework", completed: true },
  { id: 3, text: "Make bed", completed: false },
  { id: 4, text: "Brush teeth", completed: true },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
        </div>
      ))}
    </div>
  );

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }
}

export default TodoList;
