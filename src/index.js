import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import myStore from './store'
import App from './App'

// https://www.valentinog.com/blog/react-redux-tutorial-beginners/ redux tut
/*

// to kick out of website if no longer stored on local storage
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
*/

ReactDOM.render(
  (
    <Provider store={myStore}>
      <App/>
    </Provider>
  ), document.getElementById('id')
);

// ReactDOM.render(
//   (
//     <Provider store={myStore}>
//       <ConnectedRouter history={history}>
//         <div>
//           <App/>
//         </div>
//       </ConnectedRouter>
//     </Provider>
//   ), document.getElementById('id')
// );


/*
possible solution to the redux reset: https://blog.isquaredsoftware.com/2016/11/practical-redux-part-3-project-planning-and-setup/
follow these instructions to resolve the redux reset issue when adding dev changes:
https://gaearon.github.io/react-hot-loader/getstarted/
https://github.com/gaearon/react-hot-boilerplate

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

// more info about middleware
https://medium.com/@meagle/understanding-87566abcfb7a
// request/success/failure redux dispatches
https://medium.com/skyshidigital/simplify-redux-request-success-failure-pattern-ce77340eae06
*/
