import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  //useState intializes and manage a state variable called input
  //and it corresponding setInput function
  //if the props.edit is the true, input is initialized to props.edit.value
  //otherwise, it will be empty
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  //useRef creates a reference object inputRef that can be used to refer to a DOM element
  //
  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  //change the content when input some thing in there 
  const handleChange = e => {
    setInput(e.target.value);
  };

  //click button add todo, it doesnt refresh the page
  const handleSubmit = e => {
    e.preventDefault();

    //put info to data
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    //onSubmid use for make sure when click add todo, it doesnt refresh the page
    <form onSubmit={handleSubmit} className='todo_form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            // ref={inputRef}
            className='todo_input edit'
          />
          <button onClick={handleSubmit} className='todo_button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo_input'
            // ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo_button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;