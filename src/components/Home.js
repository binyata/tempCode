import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Authentication } from 'action/Authentication'
import OcrLogo from 'img/OcrLogo'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      buttonIsDisabled: "disabled",
      loggedIn: false,
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  loginSubmit(event) {
    // Look for best practices on clearing form on submit.
    // let submittedUserName = this.state.username
    // let submittedPassword = this.state.password
    let submittedUserName = 'thomaslee'
    let submittedPassword = '1Starcraftnerd!'
    this.setState({
      username: '',
      password: '',
      buttonIsDisabled: "",
    })
    // better to run the logical operations on the API side
    Authentication.login(submittedUserName, submittedPassword).then(res => {
      console.log('successful')
      this.setState({
        buttonIsDisabled: "disabled",
        loggedIn: true,
      })
      Authentication.generalStoreTask(res)
    }).catch(error => {
      console.log('failed')
      // more error logic...
      console.log(error)
      this.setState({
        buttonIsDisabled: "disabled",
      })
    })
  }
  render() {
    const { username, password, buttonIsDisabled } = this.state
    if (this.state.loggedIn === true) {
      return <Redirect to='/sales-and-share' />
    }
    return (
      <div>
        <OcrLogo />
        <input
          placeholder="username"
          name="username"
          value={username}
          onChange={this.onChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.onChange}
        />
        <input
          type="button"
          value="Login"
          disabled={!buttonIsDisabled}
          onClick={(event) => this.loginSubmit(event)}
        />

        <div>
          <p>
            By entering your user name and password,
            accessing or using the Services, you confirm
            your agreement to be bound by the Master Services
            Terms and Website Terms of Use.
          </p>
        </div>

        <div>
          <p>Need an API? Contact your account manager.</p>
        </div>
        <div>
          <h4>Browser Compatibility</h4>
          <p>
           For best results we recommend using the Google Chrome browser.
           We support the following browsers:
          </p>
          <p>We currently do not support any other browser.</p>
          <p>
           Sorry, Internet Explorer is not currently supported.
           We apologize for the inconvenience. Please use a supported browser.
          </p>
        </div>

        <div>
          <p>
            Disclaimer: You shall not use the information contained
            within our products, services and on this site
            ("Information") for any other purpose than your own internal
            business purposes. You shall not soley rely upon the
            Information in making or refraining from making any
            specific business decision or other decisions. We
            cannot accept any liability to you or anyone else
            for any losses of any nature resulting from any decision
            made or not made, or action taken or not taken, in reliance
            on the Information. This disclaimer statement is in addition
            to any disclaimer, limitation, waiver or exclusion
            contained within the Master Services Agreement.
            or Terms of Use.
          </p>
          <p>&copy; Copyright 2018</p>
        </div>
      </div>
    )
  }
};
export default Home;
