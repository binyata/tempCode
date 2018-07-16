import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './components/Routes';
// https://www.valentinog.com/blog/react-redux-tutorial-beginners/ redux tut
/*
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}
*/
ReactDOM.render(<Routes />, document.getElementById('root'));



/*
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './combineReducers.js';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './styles/style.css'
// Temp fix for reactstrap
import './styles/core/_dropdown-menu-right.scss'
// Import styles for react select component
import 'react-select/dist/react-select.css';

// Containers
import AppContainer from './app/AppContainer.js';

const loggerMiddleware = createLogger();
const middleware = process.env.NODE_ENV !== 'production'
  ? [ thunkMiddleware, loggerMiddleware ]
  : [ thunkMiddleware ];

const store = createStore(
  rootReducer,
  {appReducer: {	//setting default values
  	selectedClient: 1}
  },
  applyMiddleware(...middleware)
);

ReactDOM.render((
	<Provider store={store}>
	  <HashRouter>
	    <Switch>
	      <AppContainer/>
	    </Switch>
	  </HashRouter>
  	</Provider>
), document.getElementById('root'));
*/
