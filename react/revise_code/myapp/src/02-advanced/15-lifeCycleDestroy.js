import { Component } from "react";

export default class App extends Component {
  componentWillUnmount() {
    // 在删除组件之前进行清理工作
    console.log("清除");
  }

  render() {
    return <div>app</div>;
  }
}
