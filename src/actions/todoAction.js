import {
  CREATE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  FILTER_TODO,
  GET_TODO_LIST,
  CLEAR_TODOS_COMPETED,
} from '../constants'

const newTodoObject = (content) => {
  return {
    id: new Date().getTime(),
    completed: false,
    content: content,
  }
}

export const createTodo = (content) => (dispatch) => {
  const todo = newTodoObject(content)

  dispatch({
    type: CREATE_TODO,
    payload: { todo }
  })
}

export const updateTodo = (id, content) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    payload: { id, content },
  })
}

export const toggleTodo = (id) => (dispatch) => {
  dispatch({
    type: TOGGLE_TODO,
    payload: { id },
  })
}

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    payload: { id },
  })
}

export const filterTodos = (type) => (dispatch) => {
  dispatch({
    type: FILTER_TODO,
    payload: { type },
  })
}

export const getTodoList = (todos) => (dispatch) => {
  dispatch({
    type: GET_TODO_LIST,
    payload: { todos },
  })
}

export const clearTodosCompleted = () => (dispatch) => {
  dispatch({
    type: CLEAR_TODOS_COMPETED,
  })
}
