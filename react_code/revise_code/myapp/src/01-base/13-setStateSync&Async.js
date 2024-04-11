import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.handelClick}>add</button>
      </div>
    );
  }
  handelClick = () => {
    // setState 处在同步的逻辑中，是异步更新状态
    // setState 处在异步的逻辑中，是同步更新状态
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );
  };
}
