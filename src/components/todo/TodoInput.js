  
import React from 'react';

const TodoInput = props => {
  return (
    <div className='card card-body my-3'>
      <form>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text bg-primary text-white '>
              <i className='fa fa-book' />
            </div>
          </div>
          <input
            className='form-control text-capitalize'
            type={props.type}
            placeholder='Add A To Do Item'
            value={props.value}
            onChange={props.handleChange}
          />
        </div>
        <button
          className={
            props.editItem
              ? 'btn btn-block btn-success mt-3'
              : 'btn btn-block btn-primary mt-3'
          }
          onClick={props.handleAdd}
        >
          {props.editItem ? 'edit item' : 'add item'}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
