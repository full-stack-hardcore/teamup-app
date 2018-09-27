import axios from 'axios'
import * as React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Redirect } from 'react-router-dom'

class UserEdit extends React.Component {
  state: { name: string, email: string, redirect: boolean  }
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      email: '',
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
  isFormValid = () => {
    const {name, email} = this.state

    return name || email? true: false
  }
  handleSubmit(e: any){
    e.preventDefault()

    if(!this.isFormValid()){
      NotificationManager.error('At least one input must be filled.', 'Error' ,5000)

      return
    }
    const userData = {email: this.state.email, name: this.state.name }
    if(this.state.email === ''){
      delete userData.email
    }
    if(this.state.name === ''){
      delete userData.name
    }

    const headers = {
      'Authorization': localStorage.getItem('authorization')
  }
    axios.patch('http://localhost:3000/api/user', userData, {'headers': headers} )
    .then((res:any) => {
      this.setState({redirect: true})
    }).catch((error:any) => {
      let errorMessage = error.response.data.error.error
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

    return (
      <div className="stay-updated">
        {this.renderRedirect()}
        <div className="gap">
          <h1>User Edit</h1>
          <form
            onSubmit={this.handleSubmit}
            action="http://localhost:3000/api/user"
            method="patch"
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
            <button>Edit</button>
          </form>
        </div>
        <NotificationContainer/>
      </div>
    )
  }
}

export default UserEdit
