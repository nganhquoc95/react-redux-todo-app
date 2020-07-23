import React, { Component } from 'react'

import './index.css'

class TodoFilter extends Component {
  handleFilterTodos = (type) => {
    this.props.filterTodos(type)
  }

  handleClearTodoCompleted = () => {
    this.props.clearTodosCompleted()
  }

  render() {
    const { count, type } = this.props

    return (
      <div className='todo-filter'>
        <div className='todo-counter'>{count} todos left</div>
        <div className='todo-filter-action'>
          <button
            className={`btn btn-action ${type === 'all' ? 'active' : ''}`}
            onClick={() => this.handleFilterTodos('all')}
          >
            All
          </button>
          <button
            className={`btn btn-action ${type === 'undone' ? 'active' : ''}`}
            onClick={() => this.handleFilterTodos('undone')}
          >
            Undone
          </button>
          <button
            className={`btn btn-action ${type === 'done' ? 'active' : ''}`}
            onClick={() => this.handleFilterTodos('done')}
          >
            Done
          </button>
        </div>

        <div className='todo-clear-complete'>
          <button className='btn btn-action' onClick={this.handleClearTodoCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    )
  }
}

export default TodoFilter
