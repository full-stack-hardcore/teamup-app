import * as React from 'react'
import { Redirect } from 'react-router-dom'

class User extends React.Component {
  state: { redirect: boolean, path: string }
  constructor(props: any) {
    super(props)

    this.state = {
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

  render() {
    return (
      <div className="User-page">
        {
        }
        <h2 className="welcome">Welcome to the logged in page</h2>

        <button onClick={this.handleOnClickEdit} className="editbtn"> Click Here to edit your user </button>
        <button onClick={this.handleOnClickLogout} className="logoutbtn"> Click Here to log out </button>
        <button onClick={this.handleOnClickDelete} className="deletebtn"> Click Here to delete your user :( </button>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default User
