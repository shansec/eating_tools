import {Component} from 'react';

export default class App extends Component {
  state = {
    myName: 'may'
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log('nextProps', nextProps)
    console.log('nextState', nextState)
    console.log('nextContext', nextContext)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    console.log('snapshot', snapshot)
  }

  render() {
    return (
        <div>
          <button onClick={() => {
            this.setState({
              myName: 'MAY'
            })
          }}>click</button>
          <span>{this.state.myName}</span>
        </div>
    )
  }
}
