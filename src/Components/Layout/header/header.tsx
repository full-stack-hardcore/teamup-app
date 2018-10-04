import * as React from 'react'
import { Redirect } from 'react-router-dom'
import Image from '../../../components/shared/image/image'

class Header extends React.Component {
  state: { redirect: boolean }
  constructor(props: any) {
    super(props)

    this.state = {
      redirect: false,
    }

    this.handleOnClickLogout = this.handleOnClickLogout.bind(this)
  }

  getHeader(){
    if(localStorage.getItem('authorization') === null || localStorage.getItem('authorization') === ''){
      return (
        <div className="header-links">
          <a href="/login" className="header-login"> Log in </a>
          <a href="/user-create" className="header-login"> Sign up </a>
        </div>
      )
    } else {
      return (
        <div className="header-links">
          <a href="/user" className="header-home"> Home Page </a>
          <button onClick={this.handleOnClickLogout} className="header-home">Log out </button>
        </div>
      )
    }
  }


  handleOnClickLogout(event: any){
    localStorage.setItem('authorization', '')
    this.setState({path:'/',redirect: true})
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={'/'} />
    } else {
      return
    }
  }

  render() {
    return (
      <header>
         <div className="name-container">
          <a href="/">
            <Image className="logo" src="logo.jpg" />
            <h1 className="app-title">Team-up</h1>
          </a>
         </div>
         <div className="items-container">
          <div className="items-list">
            <ul>
              <li className="header-menu-item">About</li>
              <li className="header-menu-item">Our Team</li>
            </ul>
          </div>
          {this.getHeader()}
         </div>
         {this.renderRedirect()}
      </header>
    )
  }
}

export default Header
