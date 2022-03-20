// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import todo from './todo';

const store = configureStore({
    reducer: {
        todo: todo.reducer,
    }
});

export const todoActions = todo.actions;
export default store;

