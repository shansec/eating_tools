import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import NowPlaying from './NowPlaying'
import ComingSoon from './ComingSoon'
import { HashRouter, Redirect, Switch } from 'react-router-dom'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
export default class Film extends Component {
  render() {
    return (
      <div>
        <ul
          style={{
            width: '100%',
            height: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <li
            style={{
              listStyleType: 'none',
              textDecoration: 'none',
              flex: '1',
              textAlign: 'center'
            }}
          >
            <NavLink to="/films/nowplaying">正在上映</NavLink>
          </li>
          <li
            style={{
              listStyleType: 'none',
              textDecoration: 'none',
              flex: '1',
              textAlign: 'center'
            }}
          >
            <NavLink to="/films/comingsoon">即将上映</NavLink>
          </li>
        </ul>
        <HashRouter>
          <Switch>
            <Route path="/films/nowplaying" component={NowPlaying} />
            <Route path="/films/comingsoon" component={ComingSoon} />
            <Redirect from="/films" to="/films/nowplaying" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}
