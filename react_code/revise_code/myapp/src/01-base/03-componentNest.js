import React from 'react';


class NavBar extends React.Component {
  render() {
    return (
        <div>narbar</div>
    )
  }
}

class Swiper extends React.Component {
  render() {
    return (
        <div>swiper</div>
    )
  }
}

const Tab = () => <div>tab</div>

export default class App extends React.Component {
  render() {
    return (
        <div>
          <NavBar></NavBar>
          <Swiper></Swiper>
          <Tab></Tab>
        </div>
    )
  }
}
