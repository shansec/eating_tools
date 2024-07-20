import React from 'react';

export default class App extends React.Component {
  myRef = React.createRef()
  render() {
    return (
        <div>
          <input type="text" ref={ this.myRef } />
          <button onClick={ () => console.log(this.myRef.current.value) }>add</button>
          <button onClick={ this.handleClick }>add2</button>
        </div>
    )
  }

  handleClick = () => {
    console.log(this.myRef.current.value)
  }
}
