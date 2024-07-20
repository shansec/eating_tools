import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handelSubmit(event) {
    alert("A name was submited:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handelChange}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
