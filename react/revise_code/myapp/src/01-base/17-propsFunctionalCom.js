import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/Sidebar";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 */}
        <Navbar title="navbar"></Navbar>

        {/* 函数时组件 */}
        <SideBar bg="yellow"></SideBar>
      </div>
    );
  }
}
