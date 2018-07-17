import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import App from 'App'
import Login from './Login'
import NoMatch from './NoMatch'
import SalesAndShare from './SalesAndShareDemo/SalesAndShare'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sales-and-share" component={SalesAndShare} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
