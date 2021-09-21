import {COMPLETE_TODO,ADD_TODO,REMOVE_TODO,UPDATE_TODO} from './actionTypes';
import {v4 as uuidv4} from 'uuid'

//initialisation List of todos
const initialState={
    todos:[
        {
            id:1,
            task:'work',
            completed:false
        }
    ],
};
//logic
const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
    
        case ADD_TODO:
            const newTodo={
                id:uuidv4(),
                task:action.payload,
                completed:false,
            };
            return{
                ...state,
                todos:[newTodo,...state.todos],
            };

        case REMOVE_TODO:
            const filterTodo = state.todos.filter((el)=>el.id !== action.payload.id);
            return{
                ...state,
                todos:filterTodo,
            };

        case UPDATE_TODO:
            const updateTodos=state.todos.map((todo)=>{
                if(todo.id === action.payload.id){
                    return{ ...todo,task:action.payload.updatedTask};
                }
                return todo;
            });
            return{
                ...state,
                todos:updateTodos
            }

        case COMPLETE_TODO:
            const completeTodo= state.todos.map((el)=>
                el.id === action.payload.id 
                ? { ...action.payload, completed: !action.payload.completed } 
                : el
            );
            return{
                ...state,
                todos:completeTodo,
            };    
        default:
            return state;
    }
};
export default todosReducer;