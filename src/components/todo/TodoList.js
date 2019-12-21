import React, { useState } from 'react';

const Todo = props => {
  const [checked, setChecked] = useState(false);
  const [editItem, setEditItem] = useState(false);
  const [editItemtext, setEditItemText] = useState('');
  const handleCheck = () => {
    setChecked(!checked);
  };
  const onChange = e => {
    setEditItemText(e.target.value);
  };
  const handleEditItem = () => {
    setEditItem(!editItem);
  };
  const checkOut = e => {
    setEditItem(false);
    console.log('Click from ok button', editItem);
  };
  return editItem ? (
    <div>
      <input value={editItemtext} onChange={onChange} />
      <button onClick={handleEditItem}>X</button>
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
          <p className={!checked ? null : 'lineThrough'}>
            {editItemtext ? editItemtext : props.text}
          </p>
        </div>
        <div>
          <span className='mx-2 text-success'>
            <i
              className='fa fa-edit'
              data-index={props.index}
              onClick={handleEditItem}
            ></i>
          </span>
          <span className='mx-2 text-danger' onClick={props.clickHandler}>
            <i className='fa fa-trash'></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
