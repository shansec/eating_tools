import React, { Component } from "react";

import Film from "./components/Film/Film";
import Cinema from "./components/Cinema/Cinema";
import Center from "./components/Center/Center";

import "./css/选项卡.css";

export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: "首页",
      },
      {
        id: 2,
        text: "影院",
      },
      {
        id: 3,
        text: "我的",
      },
    ],
    currentID: 1,
  };

  render() {
    return (
      <div>
        {/* {this.state.currentID === 1 && <Film></Film>}
        {this.state.currentID === 2 && <Cinema></Cinema>}
        {this.state.currentID === 3 && <Center></Center>} */}

        {this.watch()}

        <ul>
          {this.state.list.map((item, index) => (
            <li
              key={item.id}
              className={this.state.currentID === item.id ? "active" : ""}
              onClick={() => this.changeTabbar(item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  changeTabbar(id) {
    this.setState({
      currentID: id,
    });
  }

  watch() {
    switch (this.state.currentID) {
      case 1:
        return <Film></Film>;
      case 2:
        return <Cinema></Cinema>;
      default:
        return <Center></Center>;
    }
  }
}
