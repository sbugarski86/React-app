import React from 'react';

const Todo = props => {
  return (
    <div className='list-group-item text-capitalize d-flex justify-content-between my-2'>
      <p>{props.text} </p>
      <div>
        <span className='mx-2 text-success' onClick={props.handleEdit}>
          <i className='fa fa-edit'></i>
        </span>
        <span
          className='mx-2 text-danger'
          data-index={props.index}
          onClick={props.clickHandler}
        >
          <i className='fa fa-trash'></i>
        </span>
      </div>
    </div>
  );
};

export default Todo;
