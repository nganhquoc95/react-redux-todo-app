import {
  CREATE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FILTER_TODO,
  GET_TODO_LIST,
  CLEAR_TODOS_COMPETED,
} from '../constants'
import { saveTodos } from '../utils/storeTodos'

const initialState = {
  items: [],
  filter: 'all'
}

const todos = (state = initialState, { type, payload }) => {
  var todos

  switch (type) {
    case CREATE_TODO:
      todos = [...state.items, payload.todo]

      saveTodos(todos)
      return {
        ...state,
        items: todos,
      }

    case UPDATE_TODO:
      todos = state.items.map((todo) => (todo.id === payload.id ? { ...todo, content: payload.content } : todo))

      saveTodos(todos)
      return {
        ...state,
        items: todos,
      }

    case TOGGLE_TODO:
      todos = state.items.map((todo) => (todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo))

      saveTodos(todos)
      return {
        ...state,
        items: todos,
      }

    case DELETE_TODO:
      todos = state.items.filter(({ id }) => id !== payload.id)

      saveTodos(todos)
      return {
        ...state,
        items: todos,
      }

    case FILTER_TODO:
      return {
        ...state,
        filter: payload.type,
      }

    case GET_TODO_LIST:
      return {
        ...state,
        items: payload.todos,
      }

    case CLEAR_TODOS_COMPETED:
      todos = state.items.filter((todo) => !todo.completed)

      saveTodos(todos)
      return {
        ...state,
        items: todos,
      }
    default:
      return state
  }
}

export default todos
