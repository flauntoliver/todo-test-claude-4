import React, { useState } from "react";

/**
 * AddTodoForm component provides a form to add new todo items
 * @param {Object} props - Component props
 * @param {Function} props.onAddTodo - Callback function to add a new todo
 */
const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * Handles form submission, validates input, and adds new todo
   * @param {Event} e - Form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Trim whitespace and check if input is not empty
    const trimmedValue = inputValue.trim();
    if (trimmedValue === "") {
      return; // Don't add empty todos
    }

    // Add new todo and clear input
    onAddTodo(trimmedValue);
    setInputValue("");
  };

  /**
   * Handles input value changes
   * @param {Event} e - Input change event
   */
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          maxLength={200} // Reasonable character limit
          aria-label="New todo text"
        />
        <button
          type="submit"
          className="btn-primary"
          disabled={inputValue.trim() === ""} // Disable button when input is empty
        >
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
