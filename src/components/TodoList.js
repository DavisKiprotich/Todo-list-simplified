import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const [todos, setTodos] = useState([])

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
    const updateTodo = () => {
        
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

  return (
    <div>
        <h1>What is our todo</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </div>
  )
}

export default TodoList