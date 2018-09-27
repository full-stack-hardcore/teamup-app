import * as React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from '../Home/home'
import Login from '../Login/login'
import User from '../User/user'
import UserCreate from '../User/user-create'
import UserDelete from '../User/user-delete'
import UserEdit from '../User/user-edit'
// import logo from './logo.svg'

class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

  }

  public render() {
    return (
      <div className="content">
        {
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
        }
      </div>
    )
  }
}

export default Layout
