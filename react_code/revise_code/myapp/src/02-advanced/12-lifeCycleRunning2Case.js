import {Component} from 'react';


class Box extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.props.current === this.props.index || nextProps.current === nextProps.index) {
      return true
    }
    return false
  }

  render() {
    return (
        <div style={{
          width: '100px',
          height: '100px',
          border: this.props.current === this.props.index ? '3px solid red' : '1px solid gray',
          margin: '10px',
        }}></div>)
  }
}

export default class App extends Component {
  state = {
    list: ["00", "01", "02", "03", "04", "05", "06", "07", "08"],
    current: 0
  }

  render() {
    return (
        <div>
          <input type="number" value={this.state.current} onChange={(e) => {
            this.setState({
              current: Number(e.target.value)
            })
          }}/>
          <div style={{overflow: 'hidden', display: 'flex', flexWrap: 'wrap'}}>
            {this.state.list.map((item, index) => <Box key={index} current={this.state.current} index={index}></Box>)}
          </div>
        </div>
    )
  }
}
