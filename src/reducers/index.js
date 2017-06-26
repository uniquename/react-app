// Set up your root reducer here...
import { combineReducers } from 'redux';
import { booksReducer, bookReducer } from './bookReducers'
import cart from './cartReducers'
import todos from './todos'
import myReducer from './myReducer.js'

import { routerReducer } from 'react-router-redux'

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  cart,
  todos,
  users: myReducer,
  router: routerReducer
});
