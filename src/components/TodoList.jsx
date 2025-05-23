import React from "react";
import TodoItem from "./TodoItem";

/**
 * TodoList component renders a list of todo items with filtering and statistics
 * @param {Object} props - Component props
 * @param {Array} props.todos - Array of todo objects
 * @param {Function} props.onToggleTodo - Callback function to toggle todo completion
 * @param {Function} props.onDeleteTodo - Callback function to delete todo
 * @param {string} props.filter - Current filter type ('all', 'active', 'completed')
 * @param {Function} props.onFilterChange - Callback function to change filter
 */
const TodoList = ({ todos, onToggleTodo, onDeleteTodo, filter, onFilterChange }) => {
  // Filter todos based on current filter
  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true; // 'all' filter shows everything
    }
  });

  // Calculate statistics
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const activeTodos = totalTodos - completedTodos;

  return (
    <div className="space-y-4">
      {/* Filter buttons */}
      <div className="flex justify-center space-x-2 mb-4">
        <button
          onClick={() => onFilterChange("all")}
          className={`btn-secondary ${filter === "all" ? "bg-blue-200 text-blue-800" : ""}`}
        >
          All ({totalTodos})
        </button>
        <button
          onClick={() => onFilterChange("active")}
          className={`btn-secondary ${filter === "active" ? "bg-blue-200 text-blue-800" : ""}`}
        >
          Active ({activeTodos})
        </button>
        <button
          onClick={() => onFilterChange("completed")}
          className={`btn-secondary ${filter === "completed" ? "bg-blue-200 text-blue-800" : ""}`}
        >
          Completed ({completedTodos})
        </button>
      </div>

      {/* Todo items list */}
      {filteredTodos.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {filter === "all" && totalTodos === 0 && "No todos yet. Add one above!"}
          {filter === "active" && activeTodos === 0 && totalTodos > 0 && "No active todos. Great job!"}
          {filter === "completed" && completedTodos === 0 && totalTodos > 0 && "No completed todos yet."}
          {filter !== "all" && totalTodos === 0 && "No todos yet. Add one above!"}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onToggle={onToggleTodo} onDelete={onDeleteTodo} />
          ))}
        </div>
      )}

      {/* Summary */}
      {totalTodos > 0 && (
        <div className="text-center text-sm text-gray-600 mt-4 p-4 bg-gray-50 rounded-lg">
          Progress: {completedTodos} of {totalTodos} completed
          {totalTodos > 0 && ` (${Math.round((completedTodos / totalTodos) * 100)}%)`}
        </div>
      )}
    </div>
  );
};

export default TodoList;
