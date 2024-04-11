import React, {Component} from 'react';

class Field extends Component {
  state = {
    value: ''
  }

  clear() {
    this.setState({
      value: ''
    })
  }
  render() {
    return (
        <div style={{background: 'yellow', marginTop: '10px'}}>
          <label>{this.props.label}</label>
          <input type={this.props.type} value={this.state.value} onChange={(event) => {
            this.setState({
              value: event.target.value
            })
          }}/>
        </div>
    )
  }
}


export default class App extends Component {
  username = React.createRef()
  password = React.createRef()
  render() {
    return (
        <div>
          <h1>登录页面</h1>
          <Field label="用户名" type="text" ref={this.username} ></Field>
          <Field label="密码" type="password" ref={this.password}></Field>
          <button onClick={() => {
            console.log(this.username.current)
          }}>登录</button>
          <button onClick={() => {
            this.username.current.clear()
            this.password.current.clear()
          }}>重置</button>
        </div>
    )
  }
}
