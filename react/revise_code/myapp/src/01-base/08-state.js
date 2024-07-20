import React from 'react';

export default class App extends React.Component {
  state = {
    myTxt: '收藏',
    myShow: true
  }

  render() {
    return (
        <div>
          <h1>欢迎来到 React 开发</h1>
          <button onClick={() => {
            this.setState({
              myShow: !this.state.myShow
            })
          }}>{this.state.myShow ? '收藏' : '取消收藏'}</button>
        </div>
    )
  }
}
