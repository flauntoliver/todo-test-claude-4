import { useState, useEffect } from "react";

/**
 * Custom hook for managing todo state with localStorage persistence
 * @returns {Object} Object containing todos array and functions to manipulate them
 */
const useTodos = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos);
        setTodos(parsedTodos);
      } catch (error) {
        console.error("Error parsing saved todos:", error);
        // Clear corrupted data
        localStorage.removeItem("todos");
      }
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /**
   * Adds a new todo to the list
   * @param {string} text - The todo text
   */
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now() + Math.random(), // Simple ID generation (for demo purposes)
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  /**
   * Toggles the completed state of a todo
   * @param {number|string} id - The todo ID
   */
  const toggleTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  /**
   * Deletes a todo from the list
   * @param {number|string} id - The todo ID
   */
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  /**
   * Clears all completed todos
   */
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  };
};

export default useTodos;
