import React, { Component } from 'react'
import NoMatch from 'components/NoMatch'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import SomeHomePage from 'components/SomeHomePage'
//Deprecated
import Login from 'components/Login'

class App extends Component {
  render() {
    // more info about using redux to hold path info:
    // https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
    // probably need switch if page does not exist?
    return (
      <div>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={SomeHomePage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </main>
      </div>
    )
  }
}
export default hot(module)(App)
