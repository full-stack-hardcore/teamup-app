import * as React from 'react'
import './home.css'

class Home extends React.Component {
  state: { email: string, password: string  }
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <div className="Home-page">
        {
        }
        <h2 className="welcome">Welcome to the home page, click the button bellow to find the login one!</h2>
        <div className="container">
          <a href="/login" className="loginbtn"> Click Here to Log in </a>
          <a href="/user-create" className="registerbtn"> Click Here to create an user </a>
        </div>
      </div>
    )
  }
}

export default Home
