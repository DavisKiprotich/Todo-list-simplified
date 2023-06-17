import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])
    // const [updateData, setUpdateData] = useState('')

      // Add Todo
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)
    }
    
    // Update Todo
    const updateTodo = (todoId, newValue) => {
       if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        } 
        setTodos(prev => prev.map(item => item.id === todoId ? newValue : item));
    }

    // Delete Todo
    const deleteTodo = (id) => {
        const deleteArr = [...todos].filter(todo => todo.id !== id);
        setTodos(deleteArr)
    }

    // Complete Todo
    const completeTodo = id =>{
      const updateTodos = todos.map(todo =>{
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo;
      });
        setTodos(updateTodos);
    }

    // // Cancel Update
    // const cancelUpdate = () => {
        
    // }

    
// New Approach

    
    
    // // Change Task
    // const changeTask = (e) => {
        
    // }

  return (
    <div>
        <h1>What is our todo</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList