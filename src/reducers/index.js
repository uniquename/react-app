// Set up your root reducer here...
import { combineReducers } from 'redux';
import { reducer as reduxForm  } from 'redux-form';
import { routerReducer } from 'react-router-redux'

import todos from './todos'
import myReducer from './myReducer.js'
import ContactReducer from './contact-reducer';


export default combineReducers({
  todos,
  contactStore: ContactReducer,
  users: myReducer,
  router: routerReducer,
  form: reduxForm
});
