import React, {Component} from 'react';

import Filed from './components/Filed/Filed';

export default class App extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
        <div>
          <h1>登录页面</h1>
          <Filed label="用户名" type="text" changeEvent={(value) => {
            console.log(value)
            this.setState({
              username: value
            })
          }}></Filed>
          <Filed label="密码" type="password" changeEvent={(value) => {
            console.log(value)
            this.setState({
              password: value
            })
          }}></Filed>
          <button onClick={() => {
            console.log(this.state.username)
            console.log(this.state.password)
          }}>登录
          </button>
          <button onClick={() => {

          }}>重置
          </button>
        </div>
    )
  }
}
