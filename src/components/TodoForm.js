import React,{ useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })


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


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input value={input} className='todo-input' name='text' type='text' placeholder='Add todo' onChange={handleChange} ref={inputRef} />
        <button type='submit' className='todo-button'>Add todo</button>
    </form>
  )
}

export default TodoForm