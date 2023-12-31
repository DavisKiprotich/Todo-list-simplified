import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import { RiCheckboxCircleFill, RiCloseCircleLine  } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Todo({ completeTodo, todos, deleteTodo, updateTodo, markDone }) {
    const[edit, setEdit] = useState({
        id: null,
        value: '',
        status: false
    })

    const submitUpdate = value =>{
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
            status: false
        })
    }
    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

  return todos.map( (todo, index) => (
    <React.Fragment key={todo.id} >
        <div className={ todo.status ? 'todo-row complete' : 'todo-row' } key={index}>
            <div className='todo-text' onClick={(e) => completeTodo(todo.id)} >{todo.text}</div>
            <div className='icons'>
                <RiCloseCircleLine 
                onClick={() => deleteTodo(todo.id)}
                className='delete-icon'
                />
                {todo.status ? null : 
                    (<TiEdit className='edit-icon' onClick={() => setEdit({id: todo.id, value: todo.text})} />)
                    
                }
                {}
                <div onClick={ (e) => markDone(todo.id) }>
                    <RiCheckboxCircleFill className='check-icon' />
                </div>
                
            </div>

        </div>
    </React.Fragment>
   ))
}

export default Todo