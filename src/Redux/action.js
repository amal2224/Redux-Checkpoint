import {COMPLETE_TODO , ADD_TODO , REMOVE_TODO , UPDATE_TODO} from './actionTypes';
// or import * as types from './actionTypes';

// action :  compelte todo
export const completeTodo=(todo)=>({
    type: COMPLETE_TODO,
    payload:todo
});

//  action :  add todo
export const addTodo=(todo)=>({
    type: ADD_TODO,
    payload:todo
});

//  action :  remove todo
export const removeTodo=(todo)=>({
    type: REMOVE_TODO,
    payload:todo
});

//  action :  update todo
export const updateTodo=(todo)=>({
    type: UPDATE_TODO,
    payload:todo
});