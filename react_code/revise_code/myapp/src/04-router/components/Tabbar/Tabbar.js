import { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Tabbar.css'

export default class Tabbar extends Component {
  render() {
    return (
      <div className="tabbar-box">
        <ul>
          <li>
            <NavLink to="/films">电影</NavLink>
          </li>
          <li>
            <NavLink to="/cinema">影院</NavLink>
          </li>
          <li>
            <NavLink to="/center">我的</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
