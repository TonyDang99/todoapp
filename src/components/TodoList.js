import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

//the usestate hook take in one argument, which is the initial value of the state variable
//in this case, the initial value of the todos state variable is an empty array
function TodoList() {
  //setTodos returned by the useState hook is used to update the value of the todos state variable
  // Whenever setTodos is called with a new value, React will re-render the component 
  //and update the UI with the new value of the todos state variable
  const [todos, setTodos] = useState([]);

  //when using the space, the input cant be accept and then cant add the content to do.
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //the function constructs a new array called newTodo if the todo object has a valid text property
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    //todos is a state variable that is being managed using the useState
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    console.log(...todos);
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  // const completeTodo = id => {
  //   let updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.isComplete = !todo.isComplete;
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  return (
    <>
      <div className='todo_title'>
      <h1>What's the Plan for Today?</h1>
      </div>
      {/* add todoform into todolist */}
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        // completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;