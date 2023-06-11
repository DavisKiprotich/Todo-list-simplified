import React,{ useState } from 'react'
import TodoForm from './TodoForm'


function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo =>{
        
    }

  return (
    <div>
        <h1>What is our todo</h1>
        <TodoForm />
    </div>
  )
}

export default TodoList