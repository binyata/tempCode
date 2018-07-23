import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { logOutAction } from 'actions/AuthActions'

class SalesAndShare extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedOut: false
    }
  }
  loginSubmit(event) {
    logOutAction()
    this.setState({ loggedOut: true })
  }
  render() {
    if (this.state.loggedOut === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h1>Sales And Share11</h1>
        <ul>
          <li onClick={(event) => this.loginSubmit(event)}><a>Log out</a></li>
          <li><Link to="/">Go to home test</Link></li>
        </ul>
      </div>
    )
  }
}
export default SalesAndShare
