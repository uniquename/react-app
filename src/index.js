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
import Contacts from './containers/contacts'
import ContactFormPage from './containers/contacts/contact-form-page';

import 'semantic-ui-css/semantic.min.css';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

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
        <Route path="/contacts" component={Contacts}/>
        <Route path="/contacts/new" component={ContactFormPage}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
