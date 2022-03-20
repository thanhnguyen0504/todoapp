import React from 'react'
import { render, screen } from '../../utils/test-utils'
import TodoItem from './TodoItem';

test('render TodoItem', async () => {
  render(<TodoItem key={1} id={1} active={true} text={"first todo item"}/>)  
  expect(screen.getByText(/first todo item/i)).toBeInTheDocument();
})