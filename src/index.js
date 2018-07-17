import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer.js'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import Routes from './components/Routes'
import store from './store';
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/ redux tut
/*

// to kick out of website if no longer stored on local storage
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
*/

// window.devToolsExtension ? window.devToolsExtension() : f => f -- may use for dev purposes
//
// ReactDOM.render((
// 	<Provider store={store}>
// 	  <HashRouter>
// 	    <Switch>
// 	      <AppContainer/>
// 	    </Switch>
// 	  </HashRouter>
//   	</Provider>
// ), document.getElementById('root'));


// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(...middleware),
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   )
// );
ReactDOM.render((
  <Provider store={store}>
    <Routes />
  </Provider>
), document.getElementById('id')
);


/*
Use redux if it is common information that can be used in multiple components.
Use state if it is unique to one component
Import css files in this file

https://blog.cloudboost.io/persisting-data-with-localstorage-and-redux-middleware-4760fd6afdef
Use localStorage when:

you need to securely persist data
you need support across browsers (IE. 8+)
you need to cache relatively large datasets (up to 5mb)
you want a straightforward API
Use middleware when:

you use Redux
you want to centralize your use of localStorage
you want to extend the utility of your actions

best way to store tokens in redux:
https://michaelwashburnjr.com/best-way-to-store-tokens-redux/

redux video on local storage -- Dan Abramov
https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage

Logout info:
https://netbasal.com/how-to-secure-your-users-data-after-logout-in-redux-30468c6848e8

https://redux.js.org/basics/example-todo-list
https://github.com/Remchi/reddice/blob/master/client/index.js
*/
