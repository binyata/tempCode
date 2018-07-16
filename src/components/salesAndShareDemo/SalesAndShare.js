import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class SalesAndShare extends Component {
  render() {
    return (
      <div>
        <h1>Sales And Share</h1>
        <ul>
          <li><Link to="/">Go to home test</Link></li>
        </ul>
      </div>
    )
  }
}
export default SalesAndShare
