import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Todo from './TodoList';
import TodoInput from './TodoInput';
const TodoForm = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    'Practise React',
    'Practise Java Script'
  ]);
  const handleChange = e => {
    setText(e.target.value);
  };

  const handleAdd = e => {
    e.preventDefault();
    const letterNumber =
      '^[A-Za-z0-9 /!/./-/_]*[A-Za-z0-9/!/./-][A-Za-z0-9/!/./-/_]*$';
    //const letterNumber = /^[\w\-\s]+$/;
    const newTodos = [...todos, text];
    if (text.match(letterNumber) && text.length < 30) {
      setTodos(newTodos);
      setText('');
    }
  };
  const handleDelete = index => {
    const list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };
  const clearList = e => {
    e.preventDefault();
    setText('');
    setTodos([]);
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>todo input</h3>
            <TodoInput
              value={text}
              type='text'
              handleChange={handleChange}
              handleAdd={e => handleAdd(e)}
            />
            <div>
              <h3 className='text-capitalize text-center'>todo list</h3>
              {todos.map((item, index) => (
                <Todo
                  text={item}
                  value={text}
                  key={index}
                  index={index}
                  clickHandler={() => handleDelete(index)}
                />
              ))}
            </div>
            <button
              type='button'
              className='btn btn-danger btn-block text-capitalize mt-5'
              onClick={clearList}
            >
              clear list
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
