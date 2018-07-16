import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import App from 'App'
import Home from './Home'
import NoMatch from './NoMatch'
import Login from './loginDemo/Login'
import SalesAndShare from './SalesAndShareDemo/SalesAndShare'

class Routes extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/sales-and-share" component={SalesAndShare} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Routes
