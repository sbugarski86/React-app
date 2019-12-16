import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Todo from './TodoList';
import TodoInput from './TodoInput';
const TodoForm = () => {
  const [text, setText] = useState('');
  const [editItem, setEditItem] = useState(false);
  const [todos, setTodos] = useState([
    'Practise React',
    'Practise Java Script'
  ]);

  const handleChange = e => {
    setText(e.target.value);
  };
  const handleAdd = e => {
    e.preventDefault();
    const newTodos = [...todos, text];
    if (text !== '') {
      setTodos(newTodos);
      setText('');
      setEditItem(false);
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
  const handleEdit = id => {
    const items = [...todos];
    const itemId = items[id];
    const filteredItems = items.filter(item => item !== itemId);
    setText(itemId);
    setTodos(filteredItems);
    setEditItem(true);
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
              handleAdd={handleAdd}
              editItem={editItem}
            />
            <div>
              <h3 className='text-capitalize text-center'>todo list</h3>
              {todos.map((item, index) => (
                <Todo
                  text={item}
                  key={index}
                  index={index}
                  clickHandler={() => handleDelete(index)}
                  handleEdit={() => handleEdit(index)}
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
