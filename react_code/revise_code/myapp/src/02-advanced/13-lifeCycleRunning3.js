import {Component} from 'react';

class Child extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    console.log('componentWillReceiveProps', nextProps)
  }

  render() {
    return(
        <div>
          child
        </div>
    )
  }
}

export default class App extends Component {
  state = {
    text: '1111111'
  }
  render() {
    return (
        <div>
          <button onClick={() => {
            this.setState({
              text: '222222222'
            })
          }} n>click</button>
          <Child text={this.props.text}></Child>
        </div>
    )
  }
}
