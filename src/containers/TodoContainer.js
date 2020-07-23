import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoFilter from '../components/TodoFilter'

import {
  getTodoList,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  filterTodos,
  clearTodosCompleted,
} from '../actions/todoAction'

import { getTodos } from '../utils/storeTodos'


class TodoContainer extends Component {
  componentDidMount() {
    const todos = getTodos()
    this.props.getTodoList(todos)
  }

  handleCreateTodo = (content) => {
    this.props.createTodo(content)
  }

  handleToggleTodo = (id) => {
    this.props.toggleTodo(id)
  }

  handleUpdateTodo = (id, content) => {
    this.props.updateTodo(id, content)
  }

  handleRemoveTodo = (id) => {
    this.props.deleteTodo(id)
  }

  clearTodosCompleted = () => {
    this.props.clearTodosCompleted()
  }

  render() {
    const { todos, filter, filterTodos } = this.props
    const count = todos.filter((todo) => !todo.completed).length

    return (
      <div className='App'>
        <TodoForm onCreateTodo={this.handleCreateTodo} />
        <TodoList
          todos={todos}
          filter={filter}
          onToggleTodo={this.handleToggleTodo}
          onRemoveTodo={this.handleRemoveTodo}
          handleUpdateTodo={this.handleUpdateTodo}
        />
        <TodoFilter count={count} type={filter} filterTodos={filterTodos} clearTodosCompleted={this.clearTodosCompleted} />
      </div>
    )
  }
}

TodoContainer.propTypes = {
  todos: PropTypes.array,
  filter: PropTypes.oneOf(['all', 'undone', 'done']),
  getTodoList: PropTypes.func,
  createTodo: PropTypes.func,
  updateTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  filterTodos: PropTypes.func,
  clearTodosCompleted: PropTypes.func,
}

const mapStateToProps = ({todo}) => {
  return {
    todos: todo.items,
    filter: todo.filter,
  }
}

const mapDispatchToProps = {
  getTodoList,
  createTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
  filterTodos,
  clearTodosCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
