import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
  const [todos, setTodos] = useState([
    // {id: 1, title: "Task 1", status: false},
    // {id: 1, title: "Task 2", status: false}   
  ])
    // const [updateData, setUpdateData] = useState('')
    // const [newTask, setNewTask] = useState('')

      // Add Todo
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos);
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
      let updateTodos = todos.map(todo =>{
        if(todo.id === id){
          todo.status = !todo.status
        }
        return todo;
      });
        setTodos(updateTodos);
    }
   
    // Mark task as done
    const markDone = (id) => {
      let newTask = todos.map(todo => {
        if(todo.id === id){
           return ({ ...todo, status: !todo.status })
        }
        return todo;
      })
      setTodos(newTask);
    }
    
    // // Change Task
    // const changeTask = (e) => {
        
    // }

  return (
    <div>
        <h1>What is my todo</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} updateTodo={updateTodo} markDone={markDone} />
    </div>
  )
}

export default TodoList