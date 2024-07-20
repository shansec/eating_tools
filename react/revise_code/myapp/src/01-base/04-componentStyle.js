import React from 'react';
export default class App extends React.Component {
  render() {
    const sty = {
      color: 'red',
      fontSize: '20px'
    }
    return (
        <div>
          <p style={sty} className="hello">欢迎来到 React 世界</p>
        </div>
    )
  }
}
