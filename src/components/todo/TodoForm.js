import React, { useState } from 'react';
import Navbar from '../layout/Navbar';
import Todo from './TodoList';
import TodoInput from './TodoInput';
const TodoForm = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { text: 'Practise React', key: 0 },
    { text: 'Practise JavaScript', key: 1 }
  ]);
  const [nextKey, setNextKey] = useState(2);

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleAdd = e => {
    e.preventDefault();
    const letterNumber =
      '^[A-Za-z0-9 /!/./-/_]*[A-Za-z0-9/!/./-][A-Za-z0-9/!/./-/_]*$';
    if (text.match(letterNumber) && text.length < 30) {
      const newKey = nextKey;
      setNextKey(nextKey + 1);
      const newTodos = [...todos, { text, key: newKey }];
      setTodos(newTodos);
      setText('');
    } else {

    }
  };
  const handleDelete = e => {
    const index = e.target.dataset.index;
    const list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };
  const clearList = e => {
    e.preventDefault();
    setText('');
    setTodos([]);
  };
  const moveUp = e => {
    let fromIndex = e.target.dataset.index;
    let toIndex = fromIndex - 1;
    let todosList = [...todos];
    if (fromIndex !== 0) {
      let movedCard = todosList.splice(fromIndex, 1)[0];
      todosList.splice(toIndex, 0, movedCard);
      setTodos(todosList);
    }
  };
  const moveDown = e => {
    let fromIndex = e.target.dataset.index;
    let toIndex = fromIndex + 1;
    let todosList = [...todos];
    if (fromIndex !== todosList.length) {
      let movedCard = todosList.splice(fromIndex, 1)[0];
      todosList.splice(toIndex, 0, movedCard);
      setTodos(todosList);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center my-5'>todo input</h3>
            <TodoInput
              value={text}
              type='text'
              handleChange={handleChange}
              handleAdd={e => handleAdd(e)}
            />
            <div>
              <h3 className='text-capitalize text-center my-5'>todo list</h3>
              {todos.map((item, index) =>
                item ? (
                  <Todo
                    text={item.text}
                    key={item.key}
                    index={index}
                    handleDelete={handleDelete}
                    moveUp={moveUp}
                    moveDown={moveDown}
                  />
                ) : null
              )}
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
