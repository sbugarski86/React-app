import React, { Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <div className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <p>{this.props.text} </p>
        <div >
        <span className="mx-2 text-success"
          >
           <i className="fa fa-edit"></i>
          </span>
          <span className="mx-2 text-danger"
            data-index={this.props.index}
            onClick={this.props.clickHandler}
          >
            <i className="fa fa-trash"></i>
          </span>
        
        </div>

      </div>
    )
  }
}

export default Todo
