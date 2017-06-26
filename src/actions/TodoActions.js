import * as actionTypes from './actionTypes';

export function addTodo(text) {
  return {
    type: actionTypes.ADD_TODO,
    text
  };
}

export function deleteTodo(id) {
  return {
    type: actionTypes.DELETE_TODO,
    id
  };
}

export function editTodo(id, text) {
  return {
    type: actionTypes.EDIT_TODO,
    id,
    text
  };
}

export function markTodo(id) {
  return {
    type: actionTypes.MARK_TODO,
    id
  };
}

export function markAll() {
  return {
    type: actionTypes.MARK_ALL
  };
}

export function clearMarked() {
  return {
    type: actionTypes.CLEAR_MARKED
  };
}
