import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../home/home'
import Login from '../login/login'
import User from '../user/user'
import UserCreate from '../user/user-create'
import UserDelete from '../user/user-delete'
import UserEdit from '../user/user-edit'
import Footer from './footer/footer'
import Header from './header/header'
// import logo from './logo.svg'

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

  }

  public render() {
    return (
      <div className="app-container">
        {
        }
          <Header/>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/user" component={User} />
              <Route exact path="/user-create" component={UserCreate} />
              <Route exact path="/user-edit" component={UserEdit} />
              <Route exact path="/user-delete" component={UserDelete} />
              {/* <Route exact path="/about" component={About} /> */}
              <Route exact path="/login" component={Login} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer/>
      </div>
    )
  }
}

export default Layout
