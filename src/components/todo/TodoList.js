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
  const checkOut = () => {
    setEditItem(false);
  };
  return editItem ? (
    <div className='editItem'>
      <div> &nbsp;</div>
      <input
        defaultValue={editItemtext ? editItemtext : props.text}
        onChange={onChange}
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
          <p className={!checked ? null : 'lineThrough'}>
            {!editItemtext ? props.text : editItemtext}
          </p>
        </div>
        <div>
          <span className='mx-2 text-success'>
            <i className='fa fa-edit' onClick={handleEditItem}></i>
          </span>
          <span className='mx-2 text-danger'>
            <i
              className='fa fa-trash'
              data-index={props.index}
              onClick={props.clickHandler}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Todo;
