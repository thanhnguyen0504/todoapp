// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// Import your own reducer
// import userReducer from '../store/index'
import todo from '../store/todo';

const render = (
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { todo: todo.reducer }, preloadedState }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
};

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }