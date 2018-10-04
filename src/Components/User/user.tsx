import axios from 'axios'
import * as React from 'react'
import {NotificationContainer, NotificationManager} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Redirect } from 'react-router-dom'
import UserProfile from '../shared/user-profile/user-profile'

class User extends React.Component {
  state: { name: string, email: string, redirect: boolean, path: string }
  constructor(props: any) {
    super(props)

    this.state = {
      name: '',
      email: '',
      redirect: false,
      path: ''
    }

    this.handleOnClickLogout = this.handleOnClickLogout.bind(this)
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this)
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this)

  }

  componentDidMount() {
    if(localStorage.getItem('authorization') === '' ){
      this.setState({redirect: true})
    }
    this.getStateData()

 }

  getStateData() {
    const headers = {
      'Authorization': localStorage.getItem('authorization')
    }
    axios.get('http://localhost:3000/api/user', {'headers': headers} )
    .then((res:any) => {
        this.setState({name: res.data.name, email: res.data.email})
    }).catch((error:any) => {
      let errorMessage = ''
      if(typeof error.response === 'undefined'){
        errorMessage = 'Unable to perform action, try again later.'
        NotificationManager.error(errorMessage, 'Error' ,5000)

        return
      }
      if(error.response.status === 401){
        NotificationManager.warning('You were logged out.', 'Warning' ,5000)
        localStorage.setItem('authorization', '')
        this.setState({path:'',redirect: true})

        return
      }
      if(error.response.status === 500){
        NotificationManager.error('Unable to perform action, try again later.', 'Error' ,5000)

        return
      }
    })
  }

  handleOnClickLogout(event: any){
    localStorage.setItem('authorization', '')
    this.setState({path:'/',redirect: true})
  }

  handleOnClickEdit(event: any){
    this.setState({path:'/user-edit',redirect: true})
  }

  handleOnClickDelete(event: any){
    this.setState({path:'/user-delete',redirect: true})
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.path} />
    } else {
      return
    }
  }
/* tslint:disable */
  render() {
    const userData = {
      name: this.state.name,
      email: this.state.email
    }
    return (
      <div className="User-page">
        <UserProfile user={JSON.stringify(userData)}/>
        {this.renderRedirect()}
        <NotificationContainer/>
      </div>
    )
  }
}

export default User
