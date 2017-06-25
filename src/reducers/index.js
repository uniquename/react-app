// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers'
import cart from './cartReducers';
import homeReducer from './homeReducers'

import { routerReducer } from 'react-router-redux'

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  home: homeReducer,
  cart,
  router: routerReducer
});
