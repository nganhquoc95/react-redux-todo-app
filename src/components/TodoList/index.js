import React, { Component } from 'react'

import TodoItem from '../TodoItem'

import './index.css'

export default class TodoList extends Component {

  todosfiltered = () => {
    const { todos, filter } = this.props

    switch (filter) {
      case 'done':
        return todos.filter((todo) => todo.completed)
      case 'undone':
        return todos.filter((todo) => !todo.completed)
      default:
        return todos
    }

  }

  render() {
    const todos = this.todosfiltered()
    const { onToggleTodo, onRemoveTodo, handleUpdateTodo } = this.props

    if (todos.length === 0) {
      return (
        <section className='todo-list'>
          <div className='todo-list-item'>No things to do</div>
        </section>
      )
    }

    return (
      <section className='todo-list'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleTodo={onToggleTodo}
            onRemoveTodo={onRemoveTodo}
            handleUpdateTodo={handleUpdateTodo}
          />
        ))}
      </section>
    )
  }
}
