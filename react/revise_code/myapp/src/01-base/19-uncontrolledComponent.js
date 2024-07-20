// 使用 ref 来从 DOM 节点中获取表单数据，就是非受控组件。
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handelSubmit = this.handelSubmit.bind(this);
    this.input = React.createRef();
  }

  handelSubmit(event) {
    alert("A name was submited:" + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Name:
          <input defaultValue="11111111111" type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
