import React from "react";

/**
 * TodoItem component represents a single todo item with the ability to toggle completion and delete
 * @param {Object} props - Component props
 * @param {Object} props.todo - Todo object with id, text, and completed properties
 * @param {Function} props.onToggle - Callback function to toggle todo completion
 * @param {Function} props.onDelete - Callback function to delete todo
 */
const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="flex items-center space-x-3 flex-1">
        {/* Checkbox to toggle completion */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          aria-label={`Mark "${todo.text}" as ${todo.completed ? "incomplete" : "complete"}`}
        />

        {/* Todo text with conditional styling based on completion */}
        <span className={`todo-text ${todo.completed ? "completed" : ""}`}>{todo.text}</span>
      </div>

      {/* Delete button */}
      <button onClick={() => onDelete(todo.id)} className="btn-danger text-sm" aria-label={`Delete "${todo.text}"`}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
