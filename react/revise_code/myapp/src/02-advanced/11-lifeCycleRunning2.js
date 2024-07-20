import {Component} from 'react';

export default class App extends Component {
  state = {
    myName: 'may'
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // 返回 false 会阻止 render 渲染
    return this.state.myName !== nextState.myName;
  }

  render() {
    console.log('render')
    return (
        <div>
          <button onClick={() => {
            this.setState({
              myName: 'MAY'
            })
          }}>click
          </button>
          <span>{this.state.myName}</span>
        </div>
    )
  }
}
