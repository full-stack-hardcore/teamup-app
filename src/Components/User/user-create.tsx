import axios from 'axios'
import * as React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Redirect } from 'react-router-dom'
import Image from '../shared/image/image'

class UserCreate extends React.Component {
  state: { name: string, email: string, password: string, redirect: boolean  }
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false
    }
    this.state.redirect = false
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  onChangeName(event: any) {
    const name = event.target.value
    this.setState({ name })
  }

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
      return <Redirect to="/user" />
    }

    return
  }
/* tslint:disable */
  handleSubmit(e: any){
    e.preventDefault()
    const userData = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
    }

    axios.post('http://localhost:3000/api/user', userData )
    .then((res:any) => {
        axios.post('http://localhost:3000/api/login', userData )
        .then((response:any) => {
            localStorage.setItem('authorization', response.data.token)
            this.setState({redirect: true})
        })
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
        if(typeof (error.response.data.error.name) !== 'undefined'){
          errorMessage =  error.response.data.error.name.msg
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
    const name = this.state.name
    const email = this.state.email
    const password = this.state.password

    return (
      <div className='create-container'>
      <div className="start-now">
        <p>Sign up to start working on your dreams, or finding great project where you can contribute to!</p>
      </div>
      <div className="content-container">
        <div className="create-text">
          <Image className="meeting-img" src="meeting.jpg" />
        </div>
        <div className='create-form'>
            <form
              onSubmit={this.handleSubmit}
              action="http://localhost:3000/api/user"
              method="post"
            >
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={name}
                onChange={(event) => this.onChangeName(event)}
              />
              <br/>
              <input
                type="email"
                placeholder="Your email"
                name="email"
                value={email}
                onChange={(event) => this.onChangeEmail(event)}
              />
              <br/>
              <input
                type="password"
                placeholder="Your password"
                name="password"
                value={password}
                onChange={(event) => this.onChangePassword(event)}
              />
              <button>Sign Up</button>
            </form>
          </div>
        </div>
        {this.renderRedirect()}
        <NotificationContainer/>
      </div>
    )
  }
}

export default UserCreate
