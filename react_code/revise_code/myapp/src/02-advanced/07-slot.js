import React, {Component} from 'react';


class Child extends Component {
  render() {
    return (
        <div>
          child
          {/* children 插槽 */}
          {this.props.children[0]}
        </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
        <Child>
          <div>1111</div>
          <div>22222</div>
        </Child>
    )
  }
}

/**
 * 1、为了复用
 * 2、减少父子通信
 */
