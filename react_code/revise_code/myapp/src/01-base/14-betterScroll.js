import React, {Component} from 'react';
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    column: []
  }

  render() {
    return (
        <div>
          <button onClick={() => this.getData()}>add</button>
          <div className="wrapper" style={{height: '200px', background: 'yellow', overflow: 'hidden'}}>
            <ul className="content">
              {
                this.state.column.map((item, index) => <li key={index}>{item}</li>)
              }
            </ul>
          </div>
        </div>
    )
  }

  getData() {
    this.setState({
      column: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13]
    }, () => {
      new BetterScroll('.wrapper')
    })
  }
}
