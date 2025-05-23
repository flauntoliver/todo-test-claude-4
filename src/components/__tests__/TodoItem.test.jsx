// Example test file for TodoItem component
// To run tests, install testing dependencies as mentioned in README.md

import React from "react";
// import { render, screen, fireEvent } from '@testing-library/react';
// import TodoItem from '../TodoItem';

describe("TodoItem Component", () => {
  const mockTodo = {
    id: 1,
    text: "Test todo",
    completed: false,
  };

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  /* 
  Example tests (uncomment after installing testing dependencies):

  test('renders todo text', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    expect(screen.getByText('Test todo')).toBeInTheDocument();
  });

  test('calls onToggle when checkbox is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', () => {
    render(
      <TodoItem 
        todo={mockTodo} 
        onToggle={mockOnToggle} 
        onDelete={mockOnDelete} 
      />
    );
    
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith(1);
  });
  */
});
