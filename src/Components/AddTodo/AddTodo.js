import React,{useState} from 'react'
import './AddTodo.css'

    // add newTodo
const AddTodo = ({createTodo}) => {
    const [task,setTask]=useState('');
    const handleSumbit =(e)=>{
        e.preventDefault();
        if(task !== "") {
        createTodo(task);
        setTask("");}
    }
    return (
        <>
        <p className='description'>Add new Task</p> <br/>
        <form className='TodoInput' onSubmit={handleSumbit}>
            <input
                type='text'
                placeholder='write your Todo here'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
        </>
    )
}
export default AddTodo