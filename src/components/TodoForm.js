import React, { Component } from 'react';
import uuid from 'uuid';
import Todo from './Todo';
import TodoInput from './TodoInput';
class TodoForm extends Component {
  state = {
    text: '',
    editItem: false,
    id: uuid(),
    todos: ['Practise React', 'Practise Java Script']
  }
  handleChange = (e) => {
    const newText = {
      text: e.target.value
    }
    this.setState(newText)
  }
  handleAdd = (e) => {
    e.preventDefault();
    const newTodos = [...this.state.todos, this.state.text];
    this.setState({ text: '', todos: newTodos, editItem: false })
  }
  handleDelete = (index) => {
    const list = this.state.todos;
    list.splice(index, 1);
    this.setState({ list });
  }
  clearList = (e) => {
    e.preventDefault();
    this.setState({ text: '', todos: [] })
  }
  handleEdit = (id) => {
    const items = [...this.state.todos];
    const itemId = items[id];
    const filteredItems = items.filter(item => item !== itemId)

    console.log(itemId);
    this.setState({
       text: itemId,
       todos: filteredItems,
       editItem: true
        })
  }

  renderTodoList(todos) {
    return (
      <div>{todos.map((item, index) => <Todo
        text={item}
        key={index}
        index={index}
        clickHandler={() => this.handleDelete(index)}
        handleEdit={() => this.handleEdit(index)}
      />)}</div>
    )
  }

  render() {
    const todoList = this.renderTodoList(this.state.todos)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-aut col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              todo input
          </h3>
            <TodoInput
              value={this.state.text}
              type='text'
              handleChange={this.handleChange}
              handleAdd={this.handleAdd}
              editItem = {this.state.editItem}
            />
            <h3 className="text-capitalize text-center">todo list</h3>
            {todoList}
            <button
              type="button"
              className="btn btn-danger btn-block text-capitalize mt-5"
              onClick={this.clearList}
            >clear list</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TodoForm;
