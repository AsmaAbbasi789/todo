import {createSlice, nanoid } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';


const initialState = {
    todos: [
        // {id: 1, text: "Hello world", completed : false}
    ] 
}

const ntodos =[]

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
            // console.log("Added item: ", todo)
        },

        removeTodo: (state, action) => { state.todos = state.todos.filter((todo) => todo.id !== action.payload ) },

        updateTodo: (state, action) => {  state.todos = state.todos.map((todo) =>todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo  )},
        
        toggleComplete: (state, action) => {  state.todos = state.todos.map((todo) =>todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo  )}
    }})

// they will help in individual components
export const {addTodo, removeTodo, updateTodo, toggleComplete} = todoSlice.actions

// to update store states
export default todoSlice.reducer