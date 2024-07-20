import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <button
          onClick={() => {
            this.props.myEvent();
          }}
        >
          button
        </button>
        <div>navbar</div>
      </div>
    );
  }
}

class SideBar extends Component {
  render() {
    return (
      <div style={{ background: "red" }}>
        <ul>
          <li>11111</li>
          <li>22222</li>
          <li>33333</li>
          <li>44444</li>
          <li>55555</li>
          <li>66666</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    isShow: false,
  };

  render() {
    return (
      <div>
        <NavBar myEvent={this.handleSwitch}></NavBar>
        {this.state.isShow && <SideBar></SideBar>}
      </div>
    );
  }

  handleSwitch = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
}
