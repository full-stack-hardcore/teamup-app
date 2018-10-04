import axios from 'axios'
import * as React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Redirect } from 'react-router-dom'
import Image from '../shared/image/image'

class Login extends React.Component {
  state: { email: string, password: string, redirect: boolean  }
  constructor(props: any) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)

  }
/* tslint:disable */
  onChangeEmail(event: any) {
    const email = event.target.value
    this.setState({ email })
  }

  onChangePassword(event: any) {
    const password = event.target.value
    this.setState({ password })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/user' />
    } else {
      return
    }
  }

  handleSubmit(e: any){
    e.preventDefault()
    const loginData = {
        email: this.state.email,
        password: this.state.password
    }

    axios.post('http://localhost:3000/api/login', loginData )
    .then((res:any) => {
        localStorage.setItem('authorization', res.data.token)
        this.setState({redirect: true})
    }).catch((error:any) => {
      let errorMessage = ''
      if(typeof error.response === 'undefined'){
        errorMessage = 'Unable to perform action, try again later.'
        NotificationManager.error(errorMessage, 'Error' ,5000)

        return
      }
      if(error.response.status === 500){
        NotificationManager.error('Unable to perform action, try again later.', 'Error' ,5000)

        return
      }
      errorMessage = error.response.data.error.error
      if(typeof (errorMessage) !== 'undefined'){
        NotificationManager.error(errorMessage, 'Error' ,5000)
      } else {
        if(typeof (error.response.data.error.password) !== 'undefined'){
          errorMessage =  error.response.data.error.password.msg
          NotificationManager.error(errorMessage, 'Error' ,5000)
        }
        if(typeof (error.response.data.error.email) !== 'undefined'){
          errorMessage =  error.response.data.error.email.msg
          NotificationManager.error(errorMessage, 'Error' ,5000)
        }
      }
    })
}
  render() {
    const email = this.state.email
    const password = this.state.password

    return (
      <div className='login-container'>
        <div className="start-now">
          <p>Log in to start working on your dreams, or finding great project where you can contribute to!</p>
        </div>
        <div className="content-container">
          <div className="login-text">
            <Image className="meeting-img" src="meeting.jpg" />
          </div>
          <div className='login-form'>
            <form
              onSubmit={this.handleSubmit}
              action='http://localhost:3000/api/login'
              method='post'
            >
              <input
                type='email'
                placeholder='Your email'
                name='email'
                value={email}
                onChange={(event) => this.onChangeEmail(event)}
              />
              <br/>
              <input
                type='password'
                placeholder='Your password'
                name='password'
                value={password}
                onChange={(event) => this.onChangePassword(event)}
              />
              <button className="btn-login">Log in</button>
            </form>
          </div>
        </div>
        {this.renderRedirect()}
        <NotificationContainer/>
      </div>
    )
  }
}

export default Login
