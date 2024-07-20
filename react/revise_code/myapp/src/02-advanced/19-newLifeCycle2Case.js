import React, { Component } from "react";

import "./css/newLifeCycle2Case.css";

export default class App extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8],
  };
  myRef = React.createRef();

  getSnapshotBeforeUpdate() {
    return this.myRef.current.scrollHeight;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - snapshot;
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [...[9, 10, 11, 12, 13, 14, 15], ...this.state.list],
            });
          }}
        >
          来邮件
        </button>
        <h1>邮箱应用</h1>
        <ul className="ul-box" ref={this.myRef}>
          {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
