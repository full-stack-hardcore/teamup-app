import * as React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Layout from './components/layout/layout'
// import Login from './Components/Login'

class App extends React.Component <any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <div className="app">
        {}
        <Switch>
          <Route component={Layout} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
