import React, { useState, useEffect } from "react";

function TodoList({ theme }) {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    const newTodos = [...todos, { text: task, completed: false }];
    setTodos(newTodos);
    setTask("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const styles = {

    container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: theme === "light" ? "#f9fafb" : "#1e293b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxSizing: "border-box",
        zIndex: 0,
      },
      
    heading: {
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "25px",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      outline: "none",
      backgroundColor: theme === "light" ? "#f1f5f9" : "#475569",
      color: theme === "light" ? "#1e293b" : "#f8fafc",
      transition: "all 0.3s ease",
    },
    addButton: {
      padding: "12px 20px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: theme === "light" ? "#3b82f6" : "#38bdf8",
      color: "#fff",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      borderRadius: "10px",
      marginBottom: "12px",
      backgroundColor: theme === "light" ? "#f3f4f6" : "#475569",
      color: theme === "light" ? "#1e293b" : "#e2e8f0",
      transition: "background-color 0.3s ease",
    },
    todoText: {
      cursor: "pointer",
      fontSize: "16px",
      textDecoration: "none",
      transition: "opacity 0.3s ease",
    },
    removeButton: {
      background: "none",
      border: "none",
      fontSize: "14px",
      padding: "6px 10px",
      borderRadius: "6px",
      cursor: "pointer",
      color: "#ef4444",
      fontWeight: "500",
      transition: "background 0.2s ease",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>📝 Todo List</h1>

        <div style={styles.inputContainer}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task..."
            style={styles.input}
          />
          <button onClick={addTodo} style={styles.addButton}>
            Add
          </button>
        </div>

        <ul style={styles.list}>
          {todos.map((todo, index) => (
            <li key={index} style={styles.todoItem}>
              <span
                onClick={() => toggleTodo(index)}
                style={{
                  ...styles.todoText,
                  textDecoration: todo.completed ? "line-through" : "none",
                  opacity: todo.completed ? 0.6 : 1,
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(index)}
                style={styles.removeButton}
                title="Remove task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
