import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import { RiCheckboxCircleFill, RiCloseCircleLine  } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ completeTodo, todos, deleteTodo, updateTodo, markDone }) {
    const[edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map( (todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)} >{todo.text}</div>
        <div className='icons'>
            <RiCloseCircleLine 
            onClick={() => deleteTodo(todo.id)}
            className='delete-icon'
            />
            {todo.isComplete ? null : 
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
                className='edit-icon'
                />
            }
            <RiCheckboxCircleFill onClick={(e) => markDone(todo.id)}/>
            
        </div>

    </div>
   ))
}

export default Todo