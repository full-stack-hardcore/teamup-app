import axios from 'axios'
import * as React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Redirect } from 'react-router-dom'

class UserDelete extends React.Component {
  state: { redirect: boolean  }
  constructor(props: any) {
    super(props)
    this.state = {
      redirect: false
    }
    this.state.redirect = false
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return
  }
  handleSubmit(e: any){
    e.preventDefault()

    const headers = {
      'Authorization': localStorage.getItem('authorization')
  }
    axios.delete('http://localhost:3000/api/user', {'headers': headers} )
    .then((res:any) => {
      this.setState({redirect: true})
    }).catch((error:any) => {
      if(error.response.status === 401){
        NotificationManager.error('You are not logged in. Please refresh', 'Error' ,5000)
        localStorage.setItem('authorization','')
      }
    })
}
  render() {
    return (
      <div className="user-container">
        <div className="user-data">
          <div className="data-header">
            <p>
              Are you sure you want to delete your user?
            </p>
          </div>
          <form
            className="user-delete"
            onSubmit={this.handleSubmit}
            action="http://localhost:3000/api/user"
            method="delete"
          >
            <div className="center">
              <button className="btn-confirm-delete">Click here to delete yourself</button>
            </div>
          </form>
        </div>
        {this.renderRedirect()}
        <NotificationContainer/>
      </div>
    )
  }
}

export default UserDelete
