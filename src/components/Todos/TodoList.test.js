import React from 'react'
import { render, screen } from '../../utils/test-utils'
import TodoList from './TodoList';

test('render TodoList for Active Item', async () => {
  const todoFiltered = [
      { id: 1, text: "todo 1", active: true},
      { id: 2, text: "todo 2", active: true},
      { id: 3, text: "todo 3", active: true}
  ];
  render(<TodoList todoFiltered={todoFiltered} addCount={3}/>)  
  expect(screen.getByText(/todo 1/i)).toBeInTheDocument();
  expect(screen.getByText(/todo 2/i)).toBeInTheDocument();
  expect(screen.getByText(/todo 3/i)).toBeInTheDocument();
})