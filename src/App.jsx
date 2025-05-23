import React, { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";

/**
 * Main App component that orchestrates the todo application
 */
function App() {
  const { todos, addTodo, toggleTodo, deleteTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📝 Todo App</h1>
          <p className="text-gray-600">Stay organized and get things done!</p>
        </header>

        {/* Main content container */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Add todo form */}
          <AddTodoForm onAddTodo={addTodo} />

          {/* Todo list with filtering */}
          <TodoList
            todos={todos}
            onToggleTodo={toggleTodo}
            onDeleteTodo={deleteTodo}
            filter={filter}
            onFilterChange={setFilter}
          />

          {/* Action buttons */}
          {todos.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-center">
                <button
                  onClick={clearCompleted}
                  className="btn-secondary text-sm"
                  disabled={todos.filter((todo) => todo.completed).length === 0}
                >
                  Clear Completed
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer className="text-center mt-8 text-gray-500 text-sm">
          <p>Built with React & Tailwind CSS</p>
          <p>Data persisted in localStorage</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
