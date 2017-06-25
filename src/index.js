import React from 'react'
import { render } from 'react-dom'

//import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'

import configureStore from './store/store'


//import reducers from './reducers' // Or wherever you keep your reducers


import Home from './containers/home'
import Page from './containers/page'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()
/*
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)


const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(middleware),
  // Required! Enable Redux DevTools with the monitors you chose
  //DevTools.instrument()
);

/*
// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  enhancer
)
*/
const store = configureStore();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={Page}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
//registerServiceWorker();
