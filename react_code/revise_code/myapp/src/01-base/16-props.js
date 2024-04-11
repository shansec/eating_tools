import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";

export default class App extends Component {
  state = {
    obj: {
      title: "未知",
      showLeft: true,
      showRight: true,
    },
  };
  render() {
    return (
      <div>
        <div>
          <h2>首页</h2>
          <Navbar title="首页" showLeft={false} showRight={true} />
        </div>
        <div>
          <h2>列表</h2>
          <Navbar title="列表" showLeft={false} showRight={false} />
        </div>
        <div>
          <h2>购物车</h2>
          <Navbar {...this.state.obj} />
        </div>
      </div>
    );
  }
}
