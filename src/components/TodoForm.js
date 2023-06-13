import React,{ useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    };

// New Approach
    //Tasks state
    // const [toDo, setTodo] = useState([
    //     {id:1, title: 'Task 1', status: false},
    //     {id:2, title: 'Task 2', status: false},
    // ]);

    // //Temp state
    // const [newTask, setNewTask] = useState('');
    // const [updateData, setUpdateData] = useState('');
    // // Add Task
    // const addTask = () => {

    // }
    // // Delete Task
    // const deleteTask = (id) => {
        
    // }
    // // Cancel Update
    // const cancelUpdate = () => {
        
    // }
    // // Mark Task as done
    // const markDone = (id) => {
        
    // }
    // // Change Task
    // const changeTask = (e) => {
        
    // }
    // // Update Task
    // const updateTask = () => {
        
    // }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input value={input} className='todo-input' name='text' type='text' placeholder='Add todo' onChange={handleChange} />
        <button type='submit' className='todo-button'>Add todo</button>
    </form>

    // {toDo && toDo.length ? '' : 'No Tasks...'}

    // {toDo && toDo
    //     .map( (task, index) =>{
    //         return(
    //             <React.Fragment key={task.id}>
    //                 <span className='taskText'>{task.title}</span>
    //             </React.Fragment>
    //         )
    //     })};
  )
}

export default TodoForm