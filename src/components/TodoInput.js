import React, { Component } from 'react'

class TodoInput extends Component {
  render() {
    return (
      <div className="card card-body my-3" >
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white ">
                <i className='fa fa-book' />
              </div>
            </div>
            <input
              className="form-control text-capitalize"
              type={this.props.type}
              placeholder='Add A To Do Item'
              value={this.props.value}
              onChange={this.props.handleChange}
            />

          </div>
          <button
            className={this.props.editItem ?"btn btn-block btn-success mt-3": "btn btn-block btn-primary mt-3" }
            onClick={this.props.handleAdd}>{this.props.editItem ? "edit item": "add item"}</button>
        </form>
      </div>

    )
  }
}

export default TodoInput
