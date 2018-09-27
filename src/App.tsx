import * as React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/layout'
import Image from './Components/shared/image/image'
// import Login from './Components/Login'

class App extends React.Component <any, any> {
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <div className="App">
        { <header className="App-header">
          <h1 className="App-title">Welcome to Team-up!</h1>
            <Image className="logo" src="logo.jpg" />
        </header>
        /*<p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        <Switch>
          <Route component={Layout} />
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
