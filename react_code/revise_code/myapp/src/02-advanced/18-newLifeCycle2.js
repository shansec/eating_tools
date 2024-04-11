import { Component } from "react";

export default class App extends Component {
  state = {
    myTxt: "1111111",
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", snapshot);
  }
  //  getSnapshotBeforeUpdate 取代了 componetWillUpdate ,触发时间为update发生的时候，在render之后
  //    dom渲染之前返回一个值，作为componentDidUpdate的第三个参数。
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return 10;
  }

  render() {
    console.log("render");
    return (
      <div>
        app
        <button
          onClick={() => {
            this.setState({
              myTxt: "22222222",
            });
          }}
        >
          click
        </button>
        {this.state.myTxt}
      </div>
    );
  }
}
