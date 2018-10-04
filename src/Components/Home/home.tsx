import * as React from 'react'
import LowerTime from '../../components/shared/lower-time/lower-time'
import WhatIs from '../../components/shared/what-is/what-is'
import WhyUs from '../../components/shared/why-us/why-us'

class Home extends React.Component {

  render() {
    return (
      <div className="home-container">
        <LowerTime/>
        <WhatIs/>
        <WhyUs/>
        {/* <h1 className="app-title">Team-up</h1>
        <h2 className="welcome">Welcome to the home page, click the button bellow to find the login one!</h2>
        <div className="container">
          <a href="/login" className="loginbtn"> Click Here to Log in </a>
          <a href="/user-create" className="loginbtn"> Click Here to create an user </a>
        </div> */}
      </div>
    )
  }
}

export default Home
