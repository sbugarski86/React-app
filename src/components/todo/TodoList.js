import React, { useState } from 'react';

const Todo = props => {
  const [currentText, setCurrentText] = useState(props.text);
  const [checked, setChecked] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [editItemText, setEditItemText] = useState('');

  const handleCheck = () => {
    setChecked(!checked);
  };
  const onInput = e => {
    setEditItemText(e.target.value);
  };
  const handleEditItem = () => {
    setEditItemText(currentText);
    setEditItem(!editItem);
  };
  const checkOut = () => {
    setCurrentText(editItemText);
    setEditItemText('');
    setEditItem(false);
  };

  return editItem ? (
    <div className='editItem'>
      <div> &nbsp;</div>
      <input
        value={editItemText}
        onChange={onInput}
        className='editTextInput'
      />
      <button onClick={checkOut}>Ok</button>
    </div>
  ) : (
    <div>
      <div className='list-group-item text-capitalize d-flex justify-content-between my-2'>
        <span>
          <i
            data-index={props.index}
            className={!checked ? 'dot' : 'dotChecked'}
            value={checked}
            onClick={handleCheck}
          ></i>
        </span>

        <div>
          <p className={!checked ? null : 'lineThrough'}>{currentText}</p>
        </div>
        <div>
          <span>
            <i
              className='fa fa-arrow-up text-success'
              data-index={props.index}
              onClick={props.moveUp}
            ></i>
          </span>
          <span>
            <i
              className='fa fa-arrow-down text-primary'
              data-index={props.index}
              onClick={props.moveDown}
            ></i>
          </span>
          <span className='mx-2 text-success'>
            <i className='fa fa-edit' onClick={handleEditItem}></i>
          </span>
          <span className='mx-2 text-danger'>
            <i
              className='fa fa-trash'
              data-index={props.index}
              onClick={props.handleDelete}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
