import { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'

import Cinema from '../views/Cinema/Cinema'
import Center from '../views/Center/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Film/Detail'
import Film from '../views/Film/Film'
import Login from '../views/Cinema/Login'

const isAuth = () => localStorage.getItem('token')

export default class IndexRouter extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route path="/films" component={Film} />
            <Route path="/cinema" component={Cinema} />
            <Route
              path="/center"
              render={props => (isAuth() ? <Center {...props} /> : <Redirect to="/login" />)}
            />
            {/* 动态路由 */}
            {/* <Route path="/detail/:id" component={Detail} /> */}
            <Route path="/detail" component={Detail} />
            <Route path="/login" component={Login} />

            <Redirect from="/" to="/films" exact />
            <Route component={NotFound}></Route>
          </Switch>
          {this.props.children}
        </HashRouter>
      </div>
    )
  }
}
