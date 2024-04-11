import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <input type="text"/>
        <br/>
        <button onClick={ () => console.log('add1') }>add1</button>
        <button onClick={ this.print }>add2</button>
        <button onClick={ () => { this.print() }}>add3</button>
      </div>
    )
  }

  print() {
    console.log('add2')
  }
}
