import React from 'react'
import { render, screen } from './utils/test-utils'
import App from './App';

test('render App', async () => {
  render(<App />)  
  expect(screen.getByText(/Light/i)).toBeInTheDocument();
  expect(screen.getByText(/Toggle All/i)).toBeInTheDocument();
  expect(screen.getByText(/Active/i)).toBeInTheDocument();
  expect(screen.getByText(/Done/i)).toBeInTheDocument();
  expect(screen.getByText(/No todos found!/i)).toBeInTheDocument();

})