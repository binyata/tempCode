import React, { Component } from 'react'
import Login from 'components/Login'
import NoMatch from 'components/NoMatch'
import SalesAndShare from 'components/SalesAndShareDemo/SalesAndShare'
import { Route } from 'react-router-dom'
import { hot } from 'react-hot-loader'

class App extends Component {
  render() {
    // more info about using redux to hold path info:
    // https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f
    return (
      <div>
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/sales-and-share" component={SalesAndShare} />
          <Route component={NoMatch} />
        </main>
      </div>
    )
  }
}
export default hot(module)(App)
