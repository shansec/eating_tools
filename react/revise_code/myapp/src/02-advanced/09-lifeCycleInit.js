import React, {Component} from 'react';

export default class App extends Component {
  state = {
    myName: 'may'
  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount', this.state.myName)
    this.setState({
      myName: this.state.myName.toUpperCase()
    })
    // render 之前最后一次修改状态的机会
  }

  componentDidMount() {
    console.log('componentDidMount', this.state.myName)
    // 成功 render 并渲染成真实 DOM 之后触发

    // 数据请求
    // 订阅函数调用
    // 定时器
    // 基于创建的 DOM 初始化
  }

  render() {
    // render 生命周期只能访问 this.props 和 this.state，不允许修改状态和DOM输出
    console.log('render')
    return (
        <div>
          <span>{this.state.myName}</span>
        </div>
    )
  }
}
