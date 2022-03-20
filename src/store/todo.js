import { createSlice } from '@reduxjs/toolkit';

const initialTodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialTodoState,
    reducers: {
        add(state, action) {
            state.todos.push({
                id: Math.random().toString(),
                text: action.payload.text,
                active: true
              });
        },
        delete(state, action) {
            state.todos = state.todos.filter(x => x.id !== action.payload.id);
        },
        setDone(state, action) {
            const index = state.todos.findIndex(x => x.id === action.payload.id)
            if(index >= 0) {
                state.todos[index] = {...state.todos[index], active: false}
            }
            
        },
        toggleAll(state) {
            const isAllDone = state.todos.filter(x => x.active === false)
                                            .length === state.todos.length;

            state.todos = state.todos.map((todo) => {return {...todo, active: isAllDone ? true: false}});
        }
    }
});

export const {actions, reducer} = todoSlice;

export default todoSlice;