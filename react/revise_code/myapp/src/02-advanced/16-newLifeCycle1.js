import { Component } from "react";

export default class App extends Component {
  state = {
    myName: "may",
  };
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps", nextState);
    return {
      myName: nextState.myName,
    };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              myName: "MAY",
            });
          }}
        >
          click
        </button>
        {this.state.myName}
      </div>
    );
  }
}
