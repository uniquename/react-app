import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter } from 'react-router-redux'

import registerServiceWorker from './registerServiceWorker'

import configureStore from './store/store'

import Home from './containers/home'
import Page from './containers/page'

import * as MyActions from './actions/MyActions'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

store.dispatch(MyActions.myInitLoader());

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

registerServiceWorker();
